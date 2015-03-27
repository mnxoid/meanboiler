'use strict';
(function(){

    var mongoose = require('mongoose');//MongoDb
    mongoose.connect('mongodb://localhost/test');

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
            .when('/test', {
                templateUrl: 'views/test.html',
                controller: 'TestCtrl'
            })
            .otherwise({
                redirectTo: '/notfound'
            });
    });

}.call(this));
