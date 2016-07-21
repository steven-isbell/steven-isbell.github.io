angular.module('weatherApp')
    .service('weatherService', function($http) {


        this.getWeather = function(name) {
            return $http({
                method: 'GET',
                url: 'http://api.openweathermap.org/data/2.5/weather?q=' + name + '&units=imperial&APPID=8d6d3d96f61b617556cbc73957e7ae65'
            }).then(function(response) {
                var results = response.data;
                console.log(results);
                return results;
            });
        };


          if ("geolocation" in navigator) {
              /* geolocation is available */
          } else {
              alert('Unable to access location');
          }


        // this.locWeather = navigator.geolocation.getCurrentPosition(function(position) {
        //   var lat = position.coords.latitude;
        //   var lon = position.coords.longitude;
        //   return $http({
        //     method: 'GET',
        //     url: 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&units=imperial&APPID=8d6d3d96f61b617556cbc73957e7ae65'
        //   }).then(function(response){
        //     var immWeather = response.data;
        //   });
        //
        //
        //
        //
        //   });



        this.backgroundVideos = [
             'styles/videos/Up/MP4/Up.mp4',
             'styles/videos/Rain - 78.mp4',
             'styles/videos/343457132.mp4',
             'styles/videos/CloseUp.mov'
        ];






    });
