'use strict';

angular.module('meanApp')
  .controller('NfCtrl', function ($scope,$rootScope,$location) {
  	$rootScope.active = 6;
    $scope.home = function() {
      $location.path('/');
    };
    $scope.contact = function() {
      $location.path('/contact');
    };
  });
