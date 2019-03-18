'use strict';
angular
    .module('pruebaUI')
    .controller('usuarioController', ['$rootScope', '$scope', '$location', 'toastr','usuarioService',
        function ($rootScope, $scope, $location, toastr, usuarioService ) {
            var vm = this;

            vm.fx = {
                upsert: upsert,
                cleanInputs: cleanInputs,
                validatePassword, validatePassword
            }

            vm.ui = {
                usuario: { showConfirPassword: true},
                model: {},
                paises:[],
                view: {
                    active: 'usuario',
                    returnTo: 'usuario'
                }
            }

            function upsert() {
                vm.ui.showValidation = true;
                if (vm.formSubmit.$valid) {
                    vm.ui.showValidation = false;
                    if (validatePassword()) {
                        if (typeof vm.ui.usuario.Id === 'undefined' || vm.ui.usuario.Id === '00000000-0000-0000-0000-000000000000' || vm.ui.usuario.Id === null) {
                            usuarioService.create(vm.ui.usuario).then(function (data) {
                                toastr.success("Información ingresada");
                            }, function (message) {
                                toastr.error(message, "grabar!");
                            });

                        } else {

                            usuarioService.update(vm.ui.usuario).then(function (data) {
                                toastr.success("Información Actualizada");

                            }, function (message) {
                                toastr.error(message, "actualizar!");
                            });
                        }
                    } else {
                        toastr.error("las contraseñas no coinciden");
                    }
                    
                }
            }

            function validatePassword() {
                    if (vm.ui.usuario) {
                        if (vm.ui.usuario.Password !== vm.ui.usuario.ConfirmPassword) {
                            return false;
                        } else {
                            return true;
                        }
                }

            }

            function cleanInputs() {
                vm.ui.usuario = {
                    Id: null,
                    Nombres: null,
                    Username: null,
                    Password: null,
                    ApellidoMaterno: null,
                    ApellidoPaterno: null,
                    showConfirPassword: true,
                    Pais: { Id: null, PaisId: null, Nombre: null }

                };

                vm.ui.showValidation = false;
                vm.formSubmit.$setPristine();
                vm.formSubmit.$setUntouched();
            }

       
        
        }]);