'use strict';

angular.module('meanApp')
  .controller('MainCtrl', function ($scope) {
    $scope.myInterval = 3000;
    $scope.slides = [
      {
        image: 'http://placehold.it/1080x500'
      },
      {
        image: 'http://placehold.it/1080x500'
      },
      {
        image: 'http://placehold.it/1080x500'
      },
      {
        image: 'http://placehold.it/1080x500'
      }
    ];
});
