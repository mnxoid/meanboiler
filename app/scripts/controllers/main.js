'use strict';

angular.module('meanApp')
  .controller('MainCtrl', function ($scope,$rootScope, $location) {
    $rootScope.active = 1;
    $scope.myInterval = 3000;
    $scope.slides = [
      {
        image: 'http://lorempixel.com/1280/500/business/1'
      },
      {
        image: 'http://lorempixel.com/1280/500/business/2'
      },
      {
        image: 'http://lorempixel.com/1280/500/business/3'
      },
      {
        image: 'http://lorempixel.com/1280/500/business/4'
      }
    ];

    $scope.getStarted = function() {
      $location.path('/search');
    }
});
