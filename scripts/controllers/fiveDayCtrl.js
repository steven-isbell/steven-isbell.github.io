angular.module('weatherApp')
    .controller('fiveDayCtrl', function($scope, fiveDayService) {

        $scope.getForecast = function(name) {
            $scope.name = "";
            fiveDayService.getForecast(name).then(function(results) {
                $scope.forecast = results.list;
                console.log($scope.forecast);
                if (!($scope.forecast)) {
                    alert('We can\'t find that city, try walking outside?');
                }

            });
        };

        if ("geolocation" in navigator) {
            /* geolocation is available */
        } else {
            alert('Unable to access location');
        }


        $scope.currForecast = function() {
            fiveDayService.getLocation().then(function(response) {
                fiveDayService.getAPIForecast(response).then(function(response) {
                    $('.loading').fadeOut('fast');
                    $scope.myFore = response.data.list;
                    console.log($scope.myFore);
                });
            });
        };

    });
