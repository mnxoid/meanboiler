'use strict';

angular.module('meanApp')
  .controller('TestCtrl', function ($scope) {
    $scope.tasks = [
      'Configure MongoDB',
      'Manage Git repos',
      'Implement chat'
    ];
  });
