'use strict';

angular.module('meanApp')
  .controller('TodoCtrl', function ($scope) {
    $scope.tasks = [
      'Configure MongoDB',
      'Manage Git repos',
      'Implement chat'
    ];
  });
