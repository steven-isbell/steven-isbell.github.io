angular.module('weatherApp')
    .controller('fiveDayCtrl', function($scope, fiveDayService) {

        $scope.getForecast = function() {
            fiveDayService.getForecast(name).then(function(myForecast) {
                $scope.forecast = results;

            });
        };



    });
