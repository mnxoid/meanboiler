'use strict';

angular
    .module('RHalls')
    .factory('$auth', ['$http', '$session', '$flash', function($http, $session, $flash) {

        var cacheSession = function() {
            $session.set('authenticated', true);
        };

        var uncacheSession = function() {
            $session.unset('authenticated');
        };

        var error = function(res) {
            $flash.show(res.flash);
        };

        return {
            signup: function(data) {
                var signup = $http.post('auth/signup', data);
                signup
                    .success(function(data) {
                        console.log(data);
                    })
                    .error(function(e) {
                        throw e;
                    });
                return signup;
            },
            login: function(data) {
                var login = $http.post('/auth/login', data);
                login
                    .success(function(data) {
                        console.log(data);
                        cacheSession();
                    })
                    .error(function(e) {
                        throw e;
                    });
                return login;
            },
            logout: function() {
                var logout = $http.get('/auth/logout');
                logout
                    .success(uncacheSession);
                return logout;
            },
            user: function() {
                // return curr user obj
            },
            check: function() {
                // return 1 if is logged in
                return $session.get('authenticated');
            }
        }
    }]);
