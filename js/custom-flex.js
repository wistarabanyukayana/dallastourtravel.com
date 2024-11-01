(function ($) {
  "use strict";

  // Flex Slider
  $(window).on("load", function () {
    $(".flexslider").flexslider({
      animation: "slide",
      start: function (slider) {
        $("body").removeClass("loading");
      },
      flexDirectionNav: false,
      controlNav: false,
    });
  });
})(jQuery);
