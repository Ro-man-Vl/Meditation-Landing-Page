$(document).ready(function(){
    $('.learn-more__slick-slider').slick({
        infinite: true,
        arrows: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1
      });
    // Menu bounce ---------------------------------------------------------------
    $('.header__menu-item').hover(function() {
      if (!$(this).hasClass('header__menu-item-active')) {
        $(this).toggleClass('bounce');
        $(this).siblings('.header__menu-item-active').toggleClass('current')
      }
    })
});