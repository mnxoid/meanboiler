'use strict';

angular.module('meanApp')
  .controller('MainCtrl', function ($scope,$rootScope, $location) {
    $rootScope.active = 1;
    $scope.myInterval = 3000;
    $scope.slides = [
      {
        image: 'http://placehold.it/1280x500'
      },
      {
        image: 'http://placehold.it/1280x500'
      },
      {
        image: 'http://placehold.it/1280x500'
      },
      {
        image: 'http://placehold.it/1280x500'
      }
    ];

    $scope.getStarted = function() {
      $location.path('/search');
    }
});
