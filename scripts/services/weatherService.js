angular.module('weatherApp')
    .service('weatherService', function($http, $q) {

        this.getWeather = function(name) {
            return $http({
                method: 'GET',
                url: 'http://api.openweathermap.org/data/2.5/weather?q=' + name + '&units=imperial&APPID=8d6d3d96f61b617556cbc73957e7ae65'
            }).then(function(response) {
                var results = response.data;
                return results;
            });
        };



        this.getAPIWeather = function (position) {
          var lat, lon;

          lat = position.coords.latitude;
          lon = position.coords.longitude;
          return $http({
              method: 'GET',
              url: 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&units=imperial&APPID=8d6d3d96f61b617556cbc73957e7ae65'
          });
        };


        this.getLocation = function() {
          var deferred = $q.defer();
          function success(position) {
              deferred.resolve(position);
          }
          navigator.geolocation.getCurrentPosition(success);
          return deferred.promise;
        };
    });
