'use strict';

angular.module('meanApp')
  .controller('SearchCtrl', function ($scope) {
    $scope.results = [
      'http://placehold.it/150x200',
      'http://placehold.it/150x200',
      'http://placehold.it/150x200',
      'http://placehold.it/150x200',
      'http://placehold.it/150x200',
      'http://placehold.it/150x200'
    ];

    $scope.featured = [
      'http://placehold.it/200x200',
      'http://placehold.it/200x200',
      'http://placehold.it/200x200',
    ]
  });
