'use strict';

angular
    .module('RHalls')
    .factory('$auth', ['$http', '$session', '$location', function($http, $session, $location) {

        // TODO: add tokens, not just 'authenticated' string! security risk - over 100 out of 100.

        var cacheSession = function(data) {
            $session.set('authenticated', true);
            $session.set('user', JSON.stringify(data)); // very vulnerable
            // $session.set('token', token);
        };

        var uncacheSession = function() {
            $session.unset('authenticated');
            // $session.unset('token');
        };

        var user = null;

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
                        user = data;
                        console.log(user);
                        $location.path('/');
                        cacheSession(data);
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
                return user;
            },

            check: function() {
                return $session.get('authenticated');
            }
        }
    }]);
