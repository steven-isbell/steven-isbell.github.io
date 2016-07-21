angular.module('weatherApp')
    .controller('mainCtrl', function($scope, weatherService) {

        $scope.getWeather = function(name) {
            $scope.name = "";
            weatherService.getWeather(name).then(function(results) {
                $scope.curr = results;
                if ($scope.curr.message === 'Error: Not found city') {
                    alert('Incorrect Input');

                }
                if ($scope.curr.weather[0].main === 'Clouds') {
                  $scope.video = weatherService.backgroundVideos[0];        
                } else if ($scope.curr.weather[0].main === "Rain") {
                  $scope.video = weatherService.backgroundVideos[1];
                } else if ($scope.curr.weather[0].main === "Snow") {
                  $scope.video = weatherService.backgroundVideos[2];
                } else if ($scope.curr.weather[0].main === "Clear") {
                  $scope.video = weatherService.backgroundVideos[3];
                } else {
                  $scope.video = weatherService.backgroundVideos[0];
                }


            });
        };

        // $scope.currWeather = function() {
        //   weatherService.locWeather().then(function(results) {
        //     $scope.now = results;
        //   });
        // };



    });
