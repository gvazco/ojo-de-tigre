//======================================================================
// LOADING
//======================================================================

$(window).on("load", function () {
  $("#loading").hide();
});

//======================================================================
// Slick Carousel
//======================================================================
$(document).ready(function () {
  $(".proceso-wrapper").slick({
    dots: true,
    arrows: false,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 300,
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 996,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
