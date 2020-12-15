$(document).ready(function () {
  $(".slider").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".slider").on("afterChange",
    function (slick, currentSlide,) {
      document.querySelector('line')
      let line = document.querySelector('.line').style;
    line.width =`${(currentSlide.currentSlide+2)/6*100}%`
      console.log(currentSlide.currentSlide);
    });
});
