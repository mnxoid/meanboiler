'use strict';

function TestCtrl ($scope, $rootScope) {
  $scope.test = "Hello, world!";
  $scope.gItems = [
  	{
  		title: 		"On Humans & other Beings",
  		category: 	"Stories for humans", 
  		id: 		1,
  		date: 		" 9 Apr",
  		read: 		" 3 min read"
  	},
  	{
  		title: 		"On Humans & other Beings",
  		category: 	"Stories for humans", 
  		id: 		1,
  		date: 		" 9 Apr",
  		read: 		" 3 min read"
  	}
  ];
}

angular
  .module('RHalls')
  .controller('TestCtrl', ["$scope","$rootScope", TestCtrl]);
