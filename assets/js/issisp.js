(function($) {
    "use strict"; // Start of use strict

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(
        function(){
            $('.navbar-toggle:visible').click();
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }});

  var offset = 250;
  var duration = 300;
  $(window).scroll(function() {
    if ($(this).scrollTop() > offset) {
      $(".back-to-top").fadeIn(duration);
    } else {
      $(".back-to-top").fadeOut(duration);
    }
  });

  $(".back-to-top").click(function(event) {
    event.preventDefault();
    $("html, body").animate({scrollTop: 0}, duration);
    return false;
  });

})(jQuery); // End of use strict
