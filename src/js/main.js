
// My scripts ---------------------------------------------------------------
$(function () {
  $('.learn-more__slick-slider').slick({
    infinite: true,
    arrows: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1
  });

  // Menu hiddern on scroll -------------------------------------------------

	var prevScrollPos = window.scrollY;
	$(window).on('scroll', function(){
		var carrentScrollPos = window.scrollY;
		if (carrentScrollPos > 30) {
			$('.header').addClass('header--fade');
			if (prevScrollPos > carrentScrollPos) {
				$('.header').removeClass('header--fade')
			} else {
				$('.header').addClass('header--fade')
			};
			prevScrollPos = carrentScrollPos
		} else {
			$('.header').removeClass('header--fade')
		};
	})

  // Menu bounce ---------------------------------------------------------------

  $('.header__menu-item').hover(function () {
    if (!$(this).hasClass('header__menu-item-active')) {
      $(this).toggleClass('bounce');
      $(this).siblings('.header__menu-item-active').toggleClass('current')
    }
  });

  // Yoga-tab transformation----------------------------------------------------
  
  $('.yoga__tab').on('click', function () {
    const $height = $('.yoga__tabs-area').height();
    const $articleHeight = $height - 140;

      $(this).addClass('active');   
      $(this).parent().addClass('active');  
      $(this).parent().siblings('.yoga__tabs-block').hide();
      $(this).siblings().addClass('active');
    
      $('.yoga__tabs-area').css('height', $height + 'px');
      $(this).siblings('.yoga__tab-article').css('height', $articleHeight + 'px');  

  });

  $('.yoga__tab-article').on('click', function () {
    $(this).removeClass('active').css('height', '0');
    $(this).siblings().removeClass('active');
    $(this).parent().removeClass('active');
    $('.yoga__tabs-area').css('height', 'inherit');

    $('.yoga__tabs-block').show();
  });

  // Smooth scroll to the block top---------------------------------------------
  $('.yoga__tab').on('click', function() {

    $('html, body').animate({
        scrollTop: $('.yoga__header-text').offset().top
    }, {
        duration: 370,   // on default «400» 
        easing: "linear" // on default «swing» 
    });
  });
  
  // Audio player --------------------------------------------------------------
  // const audio = $('.music__player')[0];

  $('.music__item-button').on('click', function() {
    const audio = $(this).siblings('.music__player')[0];
    const ifPlay = $(this).hasClass('play');

    if (ifPlay) {
      audio.pause();
      $(this).removeClass('play');
    } else {
      audio.play();
      $(this).addClass('play');
    };
  });

  // Magnific Popup
  $('.meditation__block').magnificPopup({
		type:'inline',
		closeBtnInside:true,
		midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
	  });

});