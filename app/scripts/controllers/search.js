'use strict';

angular.module('meanApp')
  .controller('SearchCtrl', function ($scope, $rootScope) {
    $rootScope.active = 6;
    $scope.results = [
      'http://placehold.it/160x200',
      'http://placehold.it/160x200',
      'http://placehold.it/160x200',
      'http://placehold.it/160x200',
      'http://placehold.it/160x200',
      'http://placehold.it/160x200'
    ];

    $scope.featured = [
      'http://placehold.it/200x200',
      'http://placehold.it/200x200',
      'http://placehold.it/200x200',
    ]
  });
