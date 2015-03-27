'use strict';

angular.module('meanApp')
  .controller('TodoCtrl', function ($scope,$rootScope) {
    $scope.tasks = [
      'Configure MongoDB',
      'Manage Git repos',
      'Implement chat'
    ];
    $rootScope.active = 4;
  });
