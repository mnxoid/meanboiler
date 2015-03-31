'use strict';

angular.module('meanApp')
  .controller('MainCtrl', function ($scope,$rootScope, $location) {
    $rootScope.active = 1;
    $scope.myInterval = 3000;
    let a = Math.floor( window.innerHeight*0.5 );
    $scope.slides = [
      {
        image: 'http://lorempixel.com/1280/'+a+'/business/1'
      },
      {
        image: 'http://lorempixel.com/1280/'+a+'/business/2'
      },
      {
        image: 'http://lorempixel.com/1280/'+a+'/business/3'
      },
      {
        image: 'http://lorempixel.com/1280/'+a+'/business/4'
      }
    ];

    $scope.getStarted = function() {
      $location.path('/search');
    }
});
