'use strict';

function MainCtrl ($scope, $rootScope, $location) {
  $scope.pageClass = 'page-home';
  $scope.myInterval = 3000;
  var a = Math.floor(( 3264/1280)*( window.innerHeight*0.6 ));
  $scope.slides = [
    {image: 'http://res.cloudinary.com/mnxoid-inc/image/upload/c_crop,g_center,h_'+a+',w_3264/carouselle1.jpg'},
    {image: 'http://res.cloudinary.com/mnxoid-inc/image/upload/c_crop,g_center,h_'+a+',w_3264/carouselle2.jpg'},
    {image: 'http://res.cloudinary.com/mnxoid-inc/image/upload/c_crop,g_center,h_'+a+',w_3264/carouselle3.jpg'},
    {image: 'http://res.cloudinary.com/mnxoid-inc/image/upload/c_crop,g_center,h_'+a+',w_3264/carouselle4.jpg'}
  ];

  $scope.countries = [
      {name: 'Albania', code: 'AL'},
      {name: 'Croatia', code: 'CR'},
      {name: 'Ukraine', code: 'UA'}
      ];

  $scope.getStarted = function() {
    $location.path('/search');
  };
  $scope.svgs='<csvg src="icons/buildings-2.svg" class="mx-auto"  style="margin-top:1em;height:100px;width:100px;background-color:#fff;border-radius:50%;padding:0.75em;"></csvg>';
}

angular
  .module('RHalls')
  .controller('MainCtrl', MainCtrl);
