$( document ).ready(function() {

    $('a[href^="#"]').click(function () {
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $('html').animate( { scrollTop: destination }, 1100 );
    	return false;
    });

    $('.header__navicon').click(function(){
        $('.header__nav').slideToggle();
    });

    $(window).resize(function() {
        if ($(window).width() > 560) {
            $('.header__nav').removeAttr('style');
        }
    });

    $('.header__navicon').click(function () {
        if ($(this).attr('class') == 'header__navicon change') {
            $(this).removeClass('change');
        } else {
            $(this).addClass('change');
        }
    });

    $('.slider__row').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        nextArrow: '.slider__next',
        prevArrow: '.slider__prev',
        responsive: [
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 560,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

});
