'use strict';

function NotFoundCtrl ($scope,$rootScope,$location) {
  $rootScope.active = 6;
  $scope.home = function() {
    $location.path('/');
  };
  $scope.contact = function() {
    $location.path('/contact');
  };
}

angular.module('RHalls')
  .controller('NotFoundCtrl', NotFoundCtrl);
