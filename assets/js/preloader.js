$(document).ready(function () {
    //Preloader
    $(window).on("load", function () {
          preloaderFadeOutTime = 1200;
          function hidePreloader() {
                var preloader = $('.spinner-wrapper');
                preloader.fadeOut(preloaderFadeOutTime);
          }
          hidePreloader();
    });
});