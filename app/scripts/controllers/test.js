'use strict';

function TestCtrl ($scope, $rootScope) {
  $scope.pageClass = 'page-test';
  $scope.test = "Hello, world!";
}

angular
  .module('RHalls')
  .controller('TestCtrl', TestCtrl);
