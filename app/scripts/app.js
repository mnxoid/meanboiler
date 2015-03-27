'use strict';
(function(){


    var app = angular.module('meanApp', ['ui.bootstrap']);
    app.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/todo', {
                templateUrl: 'views/todo.html',
                controller: 'TodoCtrl'
            })
            .when('/search', {
                templateUrl: 'views/search.html',
                controller: 'SearchCtrl'
            })
            .when('/notfound', {
                templateUrl: 'views/404.html',
                controller: 'NfCtrl'
            })
            .otherwise({
                redirectTo: '/notfound'
            });
    });

}.call(this));
