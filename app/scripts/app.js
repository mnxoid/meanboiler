'use strict';
(function(){

    var app = angular
      .module('RHalls', ['ui.bootstrap', 'ui.router', 'ngAnimate'])
      .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/404');

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
              halls: function($hall) {
                return $hall.get();
              }
            }

         })
         .state('404', {
           url: '/404',
           templateUrl: 'views/404.html',
           controller: 'nfctrl'
         })
         .state('test', {
           url: '/test',
           templateUrl: 'views/test.html',
           controller: 'test'
         })
         .state('search', {
           url: '/search',
           templateUrl: 'views/search.html',
           controller: 'search'
         })
    })
    .run(function($rootScope) {
        $rootScope.sel = function(a) {
            if ($rootScope.active === a) {
                return "active";
            };
        }
    });

}.call(this));
