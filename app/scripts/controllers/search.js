'use strict';

function SearchCtrl ($scope, $rootScope, $http, $hall) {
  $scope.cities = [];
  $hall.get()
    .success(function(data) {
      $scope.data=data;
    });
  // console.log($scope.data);
  $scope.fil = {};
  $scope.fil.fc=function(x){
  	if($scope.fil.capacity != undefined && $scope.fil.capacity.length>0)
  		return parseInt(x.capacity) >= parseInt($scope.fil.capacity);
  	else
  		return true;
  };
  $scope.getCities = function(country) {
  	$hall.getCities(country)
  		.success(function(data) {
  			$scope.cities = data;
  		});
  }
}

angular
  .module('RHalls')
  .controller('SearchCtrl', SearchCtrl);
