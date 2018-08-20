// Drop down for navbar
$(".dropdown-trigger").dropdown();

// Smooth scroll
$("a[href^='#']").click(function(e) {
  e.preventDefault();

  var position = $($(this).attr("href")).offset().top;

  $("body, html").animate({
      scrollTop: position
  } /* speed */ );
});

$(document).ready(function(){
  $('.collapsible').collapsible();
});