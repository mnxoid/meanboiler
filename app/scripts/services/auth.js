'use strict';

angular
    .module('RHalls')
    .factory('$auth', ['$http', '$session', '$location', '$rootScope',
                        function($http, $session, $location, $rootScope) {

        // TODO: add tokens, not just 'authenticated' string! security risk - over 100 out of 100.

        var cacheSession = function(data) {
            $session.set('authenticated', data.success);
            //$session.set('user', JSON.stringify(data)); // very vulnerable
            $session.set('token', data.token);
            $session.set('username', data.user.local.email);
        };

        var uncacheSession = function() {
            $session.unset('authenticated');
            $session.unset('token');
            $session.unset('username');
        };

        var user            = null;
        $rootScope.user     = null;
        $rootScope.loggedIn = false;

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
                        if (!data) { console.log("log in fail"); return; }

                        user = $rootScope.user = data;
                        $rootScope.loggedIn = true;

                        $location.path('/');
                        cacheSession(data);

                    })
                    .error(function(e) {
                       console.log(e.error);
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
