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
      title:  "The Things we Lost in the Fire",
      category: "Love & Hate",
      id: 2,
      date: " 7 Apr",
      read: " 5 min read",
    },
    {
      title:  "What Goes Around Comes Around",
      category: "Nutrition",
      id: 3,
      date: " 6 Apr",
      read: " 2 min read",
    },
    {
      title:  "Lily",
      category: "Nature vs. Nurture",
      id: 5,
      date: " 6 Apr",
      read: " 2 min read",
    },
    {
      title:  "My Father told me...",
      category: "Nature vs. Nurture",
      id: 5,
      date: " 6 Apr",
      read: " 2 min read",
    },
    {
      title:  "What Happens in the Brain?",
      category: "Neuroscience",
      id: 6,
      date: " 6 Apr",
      read: " 2 min read",
    },
    {
      title:  "Tasty Labrador Bacon",
      category: "Food Ethics",
      id: 7,
      date: " 6 Apr",
      read: " 2 min read",
    },
    {
      title:  "Ignorance is Bliss",
      category: "Philosophy",
      id: 8,
      date: " 6 Apr",
      read: " 2 min read",
    },
    {
      title:  "Looking Through a Telescope",
      category: "Morality & History",
      id: 1,
      date: " 6 Apr",
      read: " 2 min read",
    },
    {
      title:  "Life Ends. Period.",
      category: "Philosophy",
      id: 2,
      date: " 6 Apr",
      read: " 2 min read",
    },
    {
      title:  "The Hunger of a Teenager",
      category: "Society",
      id: 3,
      date: " 6 Apr",
      read: " 2 min read",
    },
    {
      title:  "Disorders are the New Order",
      category: "Mental Health",
      id: 4,
      date: " 6 Apr",
      read: " 2 min read",
    },
    {
      title:  "On Humans & other Beings",
      category: "Stories for humans",
      id: 1,
      date: " 9 Apr",
      read: " 3 min read",
    },
    {
      title:  "The Things we Lost in the Fire",
      category: "Love & Hate",
      id: 2,
      date: " 7 Apr",
      read: " 5 min read",
    },
    {
      title:  "What Goes Around Comes Around",
      category: "Nutrition",
      id: 3,
      date: " 6 Apr",
      read: " 2 min read",
    },
    {
      title:  "Hope for Amy Walters",
      category: "Life & Death",
      id: 4,
      date: " 6 Apr",
      read: " 2 min read",
    },
    {
      title:  "My Father told me...",
      category: "Nature vs. Nurture",
      id: 5,
      date: " 6 Apr",
      read: " 2 min read",
    },
    {
      title:  "What Happens in the Brain?",
      category: "Neuroscience",
      id: 6,
      date: " 6 Apr",
      read: " 2 min read",
    },
    {
      title:  "Tasty Labrador Bacon",
      category: "Food Ethics",
      id: 7,
      date: " 6 Apr",
      read: " 2 min read",
    },
    {
      title:  "Ignorance is Bliss",
      category: "Philosophy",
      id: 8,
      date: " 6 Apr",
      read: " 2 min read",
    },
    {
      title:  "Looking Through a Telescope",
      category: "Morality & History",
      id: 1,
      date: " 6 Apr",
      read: " 2 min read",
    },
    {
      title:  "Life Ends. Period.",
      category: "Philosophy",
      id: 2,
      date: " 6 Apr",
      read: " 2 min read",
    },
    {
      title:  "The Hunger of a Teenager",
      category: "Society",
      id: 3,
      date: " 6 Apr",
      read: " 2 min read",
    },
    {
      title:  "Disorders are the New Order",
      category: "Mental Health",
      id: 4,
      date: " 6 Apr",
      read: " 2 min read",
    }

  ];
}

angular
  .module('RHalls')
  .controller('TestCtrl', ["$scope","$rootScope", TestCtrl]);
