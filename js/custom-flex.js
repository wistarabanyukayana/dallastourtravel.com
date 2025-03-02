(function ($) {
  "use strict";

  // Flex Slider
  $(window).on("load", function () {
    $(".flexslider").flexslider({
      animation: "slide",
      flexDirectionNav: false,
      controlNav: false,
    });
  });
})(jQuery);
