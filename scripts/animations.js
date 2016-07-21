$(document).ready(function() {

    // Inserts default video
    $('.fullscreen-bg__video').append('<source src="styles/videos/Up/MP4/Up.mp4" type="video/mp4">');

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

    // Hides Weather Search Modal and Get Weather Button
    $('.flash-CTA').on('click', function() {
        $('#hidden').hide();
        $('.flash-CTA').hide();
    });

    $('.main-CTA').on('click', function(){
        $('#currHidden').hide();
        $('.flash-CTA').hide(); //find way so it can re-appear
    });

});
