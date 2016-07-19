angular.module('weatherApp')
  .controller('mainCtrl', function($scope, weatherService){

    $scope.getWeather = function(name){
      $scope.name="";
     weatherService.getWeather(name).then(function(results){
       $scope.weather = results;
       if ($scope.weather.message === 'Error: Not found city'){
         alert('Incorrect Input');
       }





       //use if staement here and mustache brackets on the source for video to
       //update dynamic video.
       //look at setting up icons off api call
     });
    };

    // var backgroundVideos = {
      //https://pixabay.com/en/videos/rain-thunder-water-lightning-78/
      //https://videos.pexels.com/videos/blurred-tree-433
      //https://vimeo.com/162864665 Ice
      //https://vimeo.com/156034613 possible sun background
      //http://www.videvo.net/video/-snow-close-up/3318
      //http://www.xstockvideo.com/stock-video/cornfield-wide-7989.html sun
    // };




  });
