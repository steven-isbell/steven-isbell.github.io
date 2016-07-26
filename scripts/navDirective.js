angular.module('weatherApp')
  .directive('navDir', function() {
    return {
      restrict: 'EA',
      controller: 'mainCtrl',
      templateUrl: 'scripts/templates/navBarTmpl.html'
    };

  });
