'use strict';

angular.module('meanApp')
  .controller('TodoCtrl', function ($scope,$rootScope,$http, Hall) {
    $rootScope.active = 4;
    $scope.formData = {};
    $scope.formDataHall = {};
    $scope.halls = undefined;

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
    /*==========================
    |-------- HALLS ------------
    ==========================*/

    /* Immediately load all halls */
    Hall
      .get()
      .success(function(data) {
        $scope.halls = data;
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });


/*
    $http.get('/api/halls')
        .success(function(data) {
            $scope.halls = data;
            console.log('Halls:',  data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
*/
    $scope.createHall = function() {
      Hall
        .create($scope.formDataHall)
        .success(function(data) {
          $scope.formDataHall = {};
          $scope.halls = data;
          console.log('Halls:',  data);
        })
        .error(function(data) {
          console.log('Error: ' + data);
        })
      /*
        $http.post('/api/halls/', $scope.formDataHall)
            .success(function(data) {
              $scope.formDataHall = {}; // clear the form so our user is ready to enter another
              $scope.halls = data;
              console.log('Halls:',  data);
            })
            .error(function(data) {
              console.log('Error: ' + data);
            });
            */
    };

    $scope.deleteHall = function(id) {
      Hall
        .delete(id)
        .success(function(data) {
          $scope.halls = data;
          console.log('Halls:',  data);
        })
        .error(function(e) {
          console.log('Error: ' + e);
        });

        /*
      $http.delete('/api/halls/' + id)
        .success(function(data) {
            $scope.halls = data;
            console.log('Halls:',  data);
        })
        .error(function(data) {
          console.log('Error: ' + data);
        });
        */
    };

});
