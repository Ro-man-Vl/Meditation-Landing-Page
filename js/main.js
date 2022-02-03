$(document).ready(function () {
  $('.learn-more__slick-slider').slick({
    infinite: true,
    arrows: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1
  });
  // Menu bounce ---------------------------------------------------------------
  $('.header__menu-item').hover(function () {
    if (!$(this).hasClass('header__menu-item-active')) {
      $(this).toggleClass('bounce');
      $(this).siblings('.header__menu-item-active').toggleClass('current')
    }
  });
  // Yoga-tab transformation----------------------------------------------------
  $('.yoga__tab').click(function () {
    const $height = $('.yoga__tabs-wrapper').height();

    $(this).addClass('active');
    $('.yoga').css('--height', $height + 'px');
   
    $(this).siblings('.yoga__tab').hide();
    $(this).children().addClass('active');

    $('.yoga__tab-closer').css('display', 'flex');
    
    $('.yoga__tab-closer').click(function () {
      $(this).siblings('.active').children().removeClass('active');
      $(this).siblings().show();
      $(this).siblings().removeClass('active');
      $('.yoga').css('--height', '');
      $(this).css('display', '');
    });


  });


});