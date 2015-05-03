'use strict';

angular
    .module('RHalls')
    .factory('$auth', ['$http', '$session', '$location', '$rootScope',
                        function($http, $session, $location, $rootScope) {

        var cacheSession = function(data) {
            $session.set('authenticated', data.success);
            $session.set('token', data.token);
            $session.set('username', data.user.local.fullname);
        };

        var uncacheSession = function() {
            $session.unset('authenticated');
            $session.unset('token');
            $session.unset('username');
        };

        var user            = null;
        $rootScope.user     = null;
        var loggedIn        = false;
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
                    .success(function(res) {
                        uncacheSession();
                        $rootScope.loggedIn = false;
                    });
                return logout;
            },

            user: function() {
                return user;
            },

            check: function() {
                return loggedIn;
            }
        }
    }]);
