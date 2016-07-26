angular.module('weatherApp')
    .directive('jqDir', function() {
        return {
            restrict: 'EA',
            // controller: "mainCtrl",
            link: function(scope, element, attrs) {
                $(document).ready(function() {

                    // Hides Page Load Modal
                    $('#hidden').hide();
                    $('.main-CTA').on('click', function() {
                        $('#hidden').show();
                    });

                    // Hides Page Load GeoModal
                    $('#currHidden').hide();
                    $('.flash-CTA').on('click', function() {
                        $('#currHidden').show();
                    });

                    // Hides Weather Search Modal and Get Local Weather Button
                    $('.flash-CTA').on('click', function() {
                        $('#hidden').hide();
                        $('.flash-CTA').hide();
                    });

                    // Hides Page Load GeoModal and Get Local Weather Button
                    $('.main-CTA').on('click', function() {
                        $('#currHidden').hide();
                        $('.flash-CTA').hide(); //find way so it can re-appear
                    });

                    // Display's loading GIF
                    $('.loading').hide();
                    $('.flash-CTA').on('click', function() {
                        $('.loading').show();
                    });

                    $('.loading-forecast').hide();
                    $('.flash-CTA').on('click', function() {
                        $('.loading-forecast').show();
                    })

                });
            }
        };

    });
