(function () {
    'use strict';

    angular
        .module('pruebaUI')
        .factory('usuarioService', usuarioService);

    usuarioService.$inject = ['$http', '$q'];

    function usuarioService($http, $q) {

        var baseUrl = '/api/usuario/';
        var _entity = null;

        var service = {
            model: model,
            entity: entity,
            create: create,
            update: update,
            all: all

        };
        return service;

        function model() {
            var request = $http({
                method: "Get",
                url: baseUrl + "model"
            });

            return request.then(handleSuccess, handleError);
        }

        function entity(model) {
            if (model !== undefined) {
                _entity = model;
            }
            return _entity;
        }

        function all() {
            var request = $http({
                method: "Get",
                url: baseUrl + "all"
            });

            return request.then(handleSuccess, handleError);
        }

        function create(model) {
            var request = $http({
                method: "Post",
                url: baseUrl + "create",
                data: model
            });

            return request.then(handleSuccess, handleError);
        }

        function update(model) {
            var request = $http({
                method: "Post",
                url: baseUrl + "update",
                data: model
            });

            return request.then(handleSuccess, handleError);
        }


        function handleError(response) {
            var returnMessage = ""
            if (!angular.isObject(response.data) ||
                !response.data.Message) {
                returnMessage = "Se ha presentado un error desconocido; por favor póngase en contacto con el administrador del sistema";
            }
            else {
                returnMessage = response.data.Message;
            }
            return ($q.reject(returnMessage));
        }

        function handleSuccess(response) {
            return response.data;
        }

    }
})();