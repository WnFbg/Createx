$(function () {
  var mixed = mixitup(".directions__list");

  $(".directions__filter-btn").on("click", function () {
    $(".directions__filter-btn").removeClass("directions__filter-btn--active");
    $(this).addClass("directions__filter-btn--active");
  });

  $('.team__slider').slick({
    arrows: false,
    slidesToShow: 4
  })
});
