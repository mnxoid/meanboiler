'use strict';

function SearchCtrl ($scope, $rootScope, $http, $hall, $stateParams) {
  var guessed=false;
  $scope.fil = {};
  $scope.cities = [];
  $scope.getCities = function(country) {
    $hall.getCities(country)
      .success(function(data) {
        $scope.cities = data;
      });
  }
  $scope.fil.fc=function(x){
    if($scope.fil.capacity != undefined && $scope.fil.capacity.length>0)
      return parseInt(x.capacity) >= parseInt($scope.fil.capacity);
    else
      return true;
  };
  $scope.fil.fp=function(x){
    if($scope.fil.price != undefined && $scope.fil.price.length>0)
      return parseInt(x.price) <= parseInt($scope.fil.price);
    else
      return true;
  };
  $hall.get()
    .success(function(data) {
      $scope.data=data;
      for(var h in data)
      {
        if(data[h]["name"]==$stateParams.q)
        {
          $scope.fil.country=data[h]["country"];
          $scope.getCities($scope.fil.country);
          $scope.fil.city=data[h]["city"];
          $scope.fil.capacity=data[h]["capacity"];
          $scope.fil.price=data[h]["price"];
          return;
        }
      }
      for(var h in data)
      {
        if(data[h]["country"]==$stateParams.q)
        {
          $scope.fil.country=data[h]["country"];
          $scope.getCities($scope.fil.country);
          return;
        }
      }
      for (var h in data)
      {
        if (data[h]["city"]==$stateParams.q) 
        {
          $scope.fil.city=$stateParams.q;
          $hall.getCountryByCity($stateParams.q)
            .success(function(data) {
              $scope.fil.country=data[0];
              $scope.getCities(data[0]);
            });
          return;
        }
      }
    });
}

angular
  .module('RHalls')
  .controller('SearchCtrl', SearchCtrl);
