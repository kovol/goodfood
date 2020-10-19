$(document).ready(function() {

  
   // Nav-icon change form and open/close nav
 
  $(".nav-icon").click(function() {
    $(".nav-icon").toggleClass("change");
    $("#myTopnav").toggleClass("responsive");
  });
 
 // Slide navbar on scroll position 

  let fixScroll = $(this).scrollTop()

  $(window).scroll(function() {

    let hH = $('header').outerHeight(), //header section height
      wS = $(this).scrollTop(); //current scroll position

    if (wS > hH) { //slide navbar

      $("#myTopnav").addClass('sticky');

    } else $("#myTopnav").removeClass('sticky');

    if (fixScroll < wS) { //hide navbar on scrolling down

      $("#myTopnav").css('top', '-210px');
      $(".nav-icon").removeClass("change");
      $("#myTopnav").removeClass("responsive");

    } else $("#myTopnav").css('top', '0');

    fixScroll = wS;
  });

  
});