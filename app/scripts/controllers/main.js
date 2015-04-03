'use strict';

angular.module('meanApp')
  .controller('MainCtrl', function ($scope,$rootScope, $location) {
    $rootScope.active = 1;
    $scope.myInterval = 3000;
    let a = Math.floor( window.innerHeight*0.5 );
    $scope.slides = [
      {
        //image: 'http://lorempixel.com/1280/'+a+'/business/1'
        image: 'https://s3.amazonaws.com/StartupStockPhotos/20140808_StartupStockPhotos/95.jpg'
      },
      {
        //image: 'http://lorempixel.com/1280/'+a+'/business/2'
        image: 'https://s3.amazonaws.com/StartupStockPhotos/20140808_StartupStockPhotos/89.jpg'
      },
      {
        //image: 'http://lorempixel.com/1280/'+a+'/business/3'
        image: 'https://s3.amazonaws.com/StartupStockPhotos/20140808_StartupStockPhotos/87.jpg'
      },
      {
        //image: 'http://lorempixel.com/1280/'+a+'/business/4'
        image: 'https://s3.amazonaws.com/StartupStockPhotos/20140808_StartupStockPhotos/86.jpg'
    }
    ];

    $scope.getStarted = function() {
      $location.path('/search');
    }
});
