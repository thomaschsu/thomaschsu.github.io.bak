$(document).ready(function () {
    //Preloader
    $(window).on("load", function () {
          preloaderFadeOutTime = 2500;
          function hidePreloader() {
                var preloader = $('.spinner-wrapper');
                preloader.fadeOut(preloaderFadeOutTime);
          }
          hidePreloader();
    });
});