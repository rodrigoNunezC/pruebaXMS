(function () {
    'use strict';

    angular
        .module('xms.components', [])
        .component('componentUsuario', {
            bindings: {
                ngModel: '=',
                view: '='
             
            },
            controllerAs: 'cvm',
            controller: controllerComponentUsuario,
            templateUrl: 'app/components/templates/component.usuario.html'
        })

        .component('componentSearchUsuario', {
            bindings: {
                ngModel: '=',
                view: '='
               
            },
            controllerAs: 'cvm',
            controller: controllerComponentSearchUsuario,
            templateUrl: 'app/components/templates/component.searchUsuario.html'
        })

    controllerComponentUsuario = ['$scope', '$timeout'];
    function controllerComponentUsuario($scope, $timeout) {

        var cvm = this;

        cvm.fx = {
            showSearchUsuario: showSearchUsuario,
        };

        cvm.ui = {
            showValidation: false,
            filter: {},
            usuario: { showConfirPassword: false},
            view: {
                active: null
            }
        }

        cvm.$onInit = function () {

            $scope.$on('sendUser', function (evt, data) {
                cvm.ui.usuario = data;
                cvm.ui.usuario.ConfirmPassword = cvm.ui.usuario.Password;

            });
        }

        cvm.$doCheck = function () {
            if (typeof cvm.ngModel.Id != 'undefied') {
                cvm.ui.usuario = cvm.ngModel;
            }
        };


        function showSearchUsuario() {
            cvm.view.active = "searchUsuario";
        }
    }

    controllerComponentSearchUsuario = ['$scope','$rootScope' ,'$timeout', 'usuarioService','toastr'];
    function controllerComponentSearchUsuario($scope, $rootScope ,$timeout, usuarioService, toastr) {
        var cvm = this;

        cvm.fx = {
            rowSelected: rowSelected,
            getAll: getAll,
            showMainParent: showMainParent
        

        };

        cvm.ui = {
            showValidation: false,
            filter: {},
            usuarios: [],
           
        }

        cvm.$onInit = function () {
        
            getAll();
        }

        function getAll() {
            usuarioService.all().then(function (data) {
                if (data.lenght !== 0) {
                    cvm.ui.usuarios = data;
                }
               
            }, function (message) {
                toastr.error(message, "modelo de asociado!");
            });

        }

        function showMainParent() {
            if (cvm.view != undefined) {
                cvm.view.active = cvm.view.returnTo;
            }
        }

        function rowSelected(item) {
            if (typeof cvm.ngModel != 'undefined') {
             
                cvm.ngModel = item;
                $timeout(function () {
                    $rootScope.$broadcast('sendUser', cvm.ngModel);
                    showMainParent();
                }, 300)
            }
        }

    }

})();