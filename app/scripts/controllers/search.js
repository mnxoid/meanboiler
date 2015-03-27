'use strict';

angular.module('meanApp')
  .controller('SearchCtrl', function ($scope) {
    $scope.tasks = [
      'Configure MongoDB',
      'Manage Git repos',
      'Implement chat'
    ];
  });
