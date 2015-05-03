'use strict';
(function(){

    var app;
    app = angular
        .module('RHalls', ['ui.router', 'angucomplete', 'mgcrea.ngStrap','ngDialog', 'ngSanitize'])
        .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
            $urlRouterProvider.otherwise('/404');

            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'views/main.html',
                    controller: 'MainCtrl'
                })
                .state('login', {
                    url: '/login',
                    templateUrl: 'views/login.html',
                    controller: 'AuthCtrl'
                })
                .state('signup', {
                    url: '/signup',
                    templateUrl: 'views/signup.html',
                    controller: 'AuthCtrl'
                })
                .state('todo', {
                    url: '/todo',
                    templateUrl: 'views/todo.html',
                    controller: 'TodoCtrl',
                    resolve: {
                        halls: function ($hall) {
                            return $hall.get();
                        }
                    }

                })
                .state('404', {
                    url: '/404',
                    templateUrl: 'views/404.html',
                    controller: 'NotFoundCtrl'
                })
                .state('test', {
                    url: '/test',
                    templateUrl: 'views/test.html',
                    controller: 'TestCtrl'
                })
                .state('search', {
                    url: '/search?q=',
                    templateUrl: 'views/search.html',
                    controller: 'SearchCtrl'
                })
                .state('about', {
                    url: '/about',
                    templateUrl: 'views/about.html'
                })
                .state('contact', {
                    url: '/contact',
                    templateUrl: 'views/contact.html'
                })
        })
        .run(function ($rootScope) {
            $rootScope.$on('$routeChangeStart', function (event, next, current) {
                //TODO: add logic to handle protected routes
            });

        });

}());
