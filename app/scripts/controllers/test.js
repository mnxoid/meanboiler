'use strict';

function TestCtrl ($scope, $rootScope) {
  $scope.pageClass = 'page-test';
  $rootScope.active = 5;
  $scope.test = "Hello, world!";
}

angular.module('RHalls')
  .controller('TestCtrl', TestCtrl);
