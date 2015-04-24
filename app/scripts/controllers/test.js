'use strict';

function TestCtrl ($scope, $rootScope) {
  $scope.test = "Hello, world!";
}

angular
  .module('RHalls')
  .controller('TestCtrl', TestCtrl);
