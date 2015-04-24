'use strict';

function TodoCtrl($state, $scope,$rootScope,$http, $hall, halls) {
  $scope.formData = {};
  $scope.formDataHall = {};
  $scope.halls = halls.data;


  /*==========================
  |-------- TODOS ------------
  ==========================*/

  // when landing on the page, get all todos and show them
  $http.get('/api/todos')
      .success(function(data) {
          $scope.todos = data;
          console.log(data);
      })
      .error(function(data) {
          console.log('Error: ' + data);
      });

  // when submitting the add form, send the text to the node API
  $scope.createTodo = function() {
      $http.post('/api/todos', $scope.formData)
          .success(function(data) {
              $scope.formData = {}; // clear the form so our user is ready to enter another
              $scope.todos = data;
              console.log('Todos:',  data);
          })
          .error(function(data) {
              console.log('Error: ' + data);
          });
  };

  // delete a todo after checking it
  $scope.deleteTodo = function(id) {
      $http.delete('/api/todos/' + id)
          .success(function(data) {
              $scope.todos = data;
              console.log(data);
          })
          .error(function(data) {
              console.log('Error: ' + data);
          });
  };


  /*=========================|
  |-------- HALLS -----------|
  |=========================*/

  $scope.createHall = function() {
    $hall
      .create($scope.formDataHall)
      .success(function(data) {
        $scope.formDataHall = {};
        $scope.halls = data;
        console.log('Halls:',  data);
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };

  $scope.deleteHall = function(id) {
    $hall
      .delete(id)
      .success(function(data) {
        $scope.halls = data;
        console.log('Halls:',  data);
      })
      .error(function(e) {
        console.log('Error: ' + e);
      });
  };
}

angular
  .module('RHalls')
  .controller('TodoCtrl',TodoCtrl);
