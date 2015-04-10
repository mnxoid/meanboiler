'use strict';

angular
    .module('RHalls')
    .factory('$flash', ['$rootScope', function($rootScope) {
        return {
            show: function(msg) {
                $rootScope.flash = msg;
            },
            clear: function() {
                $rootScope.flash = '';
            }
        }
    }]);
