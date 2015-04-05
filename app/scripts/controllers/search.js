'use strict';

angular.module('meanApp')
  .controller('SearchCtrl', function ($scope, $rootScope, $http) {
    $rootScope.active = 6;
    $scope.results = [
      'http://lorempixel.com/160/200/city/1',
      'http://lorempixel.com/160/200/city/2',
      'http://lorempixel.com/160/200/city/3',
      'http://lorempixel.com/160/200/city/4',
      'http://lorempixel.com/160/200/city/5',
      'http://lorempixel.com/160/200/city/6'
    ];

    $scope.featured = [
      'http://placehold.it/200x200',
      'http://placehold.it/200x200',
      'http://placehold.it/200x200',
    ];

    $http.get('/api/halls')
        .success(function(data) {
            $scope.halls = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
  });
