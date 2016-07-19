angular.module('weatherApp')
    .service('fiveDayService', function() {





        this.getForecast = function(name) {
            return $http({
                method: 'GET',
                url: 'http://api.openweathermap.org/data/2.5/forecast?q=' + name + '&units=imperial&APPID=8d6d3d96f61b617556cbc73957e7ae65'
            }).then(function(response) {
                console.log(response);
                var myForecast = response.data;
                return myForecast;
            });
        };

    });
