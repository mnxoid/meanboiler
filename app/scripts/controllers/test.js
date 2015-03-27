'use strict';

angular.module('meanApp')
  .controller('TestCtrl', function ($scope,$rootScope) {
  	$rootScope.active = 5;
    $scope.test = "Hello, world!";
  });
