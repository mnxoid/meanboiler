'use strict';
(function(){

    var app = angular
      .module('meanApp', ['ui.bootstrap', 'ui.router'])
      .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/notfound');

        $stateProvider
          .state('home', {
            url: '/',
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
          })
          .state('todo', {
            url: '/todo',
            templateUrl: 'views/todo.html',
            controller: 'TodoCtrl',
            resolve: {
              halls: function(Hall) {
                return Hall.get();
              }
            }

         });
    })
    .run(function($rootScope) {
        $rootScope.sel = function(a) {
            if ($rootScope.active === a) {
                return "active";
            };
        }
    });

}.call(this));
