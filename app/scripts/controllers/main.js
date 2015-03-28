'use strict';

angular.module('meanApp')
  .controller('MainCtrl', function ($scope,$rootScope) {
    $rootScope.active = 1;
    $scope.myInterval = 3000;
    $scope.slides = [
      {
        image: 'http://lorempixel.com/1280/500/business'
      },
      {
        image: 'http://lorempixel.com/1280/500/sports'
      },
      {
        image: 'http://lorempixel.com/1280/500/fashion'
      },
      {
        image: 'http://lorempixel.com/1280/500/people'
      }
    ];
});
