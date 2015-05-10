'use strict';

angular
  .module('RHalls')
  .factory('$hall', ['$http', function($http) {
      return {
        get: function() {
          return $http.get('/api/halls');
        },
        get_by_id: function(id) {
          return $http.get('/api/halls/' + id);
        },
        create: function(data) {
          return $http.post('/api/halls/', data);
        },
        delete: function(id) {
          return $http.delete('/api/halls/' + id);
        },
        getCities: function(country) {
          return $http.get('/api/halls/cities/' + country);
        },
        country: function() {
          return $http.get('/api/halls/countries');
        },
        getAllCities: function() {
          return $http.get('/api/halls/cities');
        },
        getCountryByCity: function(city) {
          return $http.get('/api/halls/countries/' + city);
        }
      }
  }]);
