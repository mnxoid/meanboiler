'use strict';

angular.module('meanApp')
  .controller('MainCtrl', function ($scope,$rootScope) {
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
});
