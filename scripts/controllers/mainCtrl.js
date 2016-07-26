angular.module('weatherApp')
    .controller('mainCtrl', function($scope, weatherService, $window) {

        $scope.getWeather = function(name) {
            $scope.name = "";
            weatherService.getWeather(name).then(function(results) {
                $scope.curr = results;
                if ($scope.curr.message === 'Error: Not found city') {
                    alert('We can\'t find that city, try walking outside?');

                }
                // if ($scope.curr.weather[0].main === 'Clouds') {
                //   $scope.video = weatherService.backgroundVideos[0];
                // } else if ($scope.curr.weather[0].main === "Rain") {
                //   $scope.video = weatherService.backgroundVideos[1];
                // } else if ($scope.curr.weather[0].main === "Snow") {
                //   $scope.video = weatherService.backgroundVideos[2];
                // } else if ($scope.curr.weather[0].main === "Clear") {
                //   $scope.video = weatherService.backgroundVideos[3];
                // } else {
                //   $scope.video = weatherService.backgroundVideos[0];
                // }
                //

            });
        };

        if ("geolocation" in navigator) {
            /* geolocation is available */
        } else {
            alert('Unable to access location');
        }


        $scope.currWeather = function() {
            weatherService.getLocation().then(function (response) {
              weatherService.getAPIWeather(response).then(function (response) {
                $('.loading').fadeOut();
                $scope.now = response.data;
              });
            });
        };


    });
