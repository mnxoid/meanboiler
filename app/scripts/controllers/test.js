'use strict';

function TestCtrl ($scope, $rootScope) {
  $rootScope.active = 5;
  $scope.test = "Hello, world!";
}

angular.module('RHalls')
  .controller('TestCtrl', TestCtrl);
