'use strict';

function SearchCtrl ($scope, $rootScope, $http, $hall) {
  $hall.get()
    .success(function(data) {
      $scope.data=data;
    });
  console.log($scope.data);
}

angular
  .module('RHalls')
  .controller('SearchCtrl', SearchCtrl);
