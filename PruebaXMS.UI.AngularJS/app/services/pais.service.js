(function () {
    'use strict';

    angular
        .module('pruebaUI')
        .factory('paisService', paisService);

    paisService.$inject = ['$http', '$q'];

    function paisService($http, $q) {

        var baseUrl = '/api/pais/';

        var service = {
            all: all
        };
        return service;

        function all() {
            var request = $http({
                method: "Get",
                url: baseUrl + "all"
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