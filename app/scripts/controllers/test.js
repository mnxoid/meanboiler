'use strict';

angular.module('RHalls')
  .controller('TestCtrl', function ($scope,$rootScope) {
  	$rootScope.active = 5;
    $scope.test = "Hello, world!";
  });
