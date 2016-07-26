angular.module('weatherApp')
  .config(function($stateProvider, $urlRouterProvider) {


    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('Landing Page', {
        url: "/",
        templateUrl: "scripts/templates/landingPage.html"
      })
      .state('Today\'s weather', {
        url: "/home",
        templateUrl: "scripts/templates/home.html",
        controller: "mainCtrl"
      })
      .state('5-Day Forecast', {
        url: "/7-day-forecast",
        templateUrl: "scripts/templates/fiveDay.html",
        controller: "fiveDayCtrl"
      })
      .state('About', {
        url: "/about",
        templateUrl: "scripts/templates/about.html"
      });







  });
