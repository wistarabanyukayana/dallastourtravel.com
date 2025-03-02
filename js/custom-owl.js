(function ($) {
  "use strict";

  // Cache Selectors
  var umrohOffers = $("#owl-umroh-offers"),
    hajiOffers = $("#owl-haji-offers"),
    promoOffers = $("#owl-promo-offers"),
    carOffers = $("#owl-car-offers"),
    holidayTours = $(".owl-holidays"),
    testimonials = $("#owl-testimonials"),
    team = $("#owl-team"),
    companyLogo = $("#owl-company-logo"),
    attractions = $("#owl-attractions");

  // Owl Package Offers
  promoOffers.owlCarousel({
    items: 1,
    loop: true,
    center: true,
    autoWidth: true,
    stagePadding: 15,
    margin: 15,

    //Autoplay
    autoplay: true,
    autoplayHoverPause: true,

    // Navigation
    nav: true,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
    rewind: true,
    scrollPerPage: false,

    // Responsive
    responsive: {
      479: {
        items: 1,
      },
      600: {
        items: 1,
      },
      768: {
        items: 2,
      },
      991: {
        items: 2,
      },
      1199: {
        items: 3,
      },
    },
    responsiveRefreshRate: 200,
    responsiveBaseWidth: window,
  });

  umrohOffers.owlCarousel({
    items: 1,
    loop: true,
    center: true,
    autoWidth: true,
    stagePadding: 15,
    margin: 15,

    //Autoplay
    autoplay: true,
    autoplayHoverPause: true,

    // Navigation
    nav: true,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
    rewind: true,
    scrollPerPage: false,

    // Responsive
    responsive: {
      479: {
        items: 1,
      },
      600: {
        items: 1,
      },
      768: {
        items: 2,
      },
      991: {
        items: 2,
      },
      1199: {
        items: 3,
      },
    },
    responsiveRefreshRate: 200,
    responsiveBaseWidth: window,
  });

  hajiOffers.owlCarousel({
    items: 1,
    loop: true,
    center: true,
    autoWidth: true,
    stagePadding: 15,
    margin: 15,

    //Autoplay
    autoplay: true,
    autoplayHoverPause: true,

    // Navigation
    nav: true,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
    rewind: true,
    scrollPerPage: false,

    // Responsive
    responsive: {
      479: {
        items: 1,
      },
      600: {
        items: 1,
      },
      768: {
        items: 2,
      },
      991: {
        items: 2,
      },
      1199: {
        items: 2,
      },
    },
    responsiveRefreshRate: 200,
    responsiveBaseWidth: window,
  });
})(jQuery);
