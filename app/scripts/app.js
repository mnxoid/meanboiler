'use strict';
(function(){


    var app = angular.module('meanApp', []);
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
            .otherwise({
                redirectTo: '/'
            });
    });

}.call(this));
