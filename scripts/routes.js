angular.module('weatherApp')
  .config(function($stateProvider, $urlRouterProvider) {


    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('Today\'s weather', {
        url: "/",
        templateUrl: "scripts/templates/home.html",
        controller: "mainCtrl"
      })
      .state('5-Day Forecast', {
        url: "/5-day-forecast",
        templateUrl: "scripts/templates/fiveDay.html",
        controller: "fiveDayCtrl"
      })
      .state('About', {
        url: "/about",
        templateUrl: "scripts/templates/about.html"
      });







  });
