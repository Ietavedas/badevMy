var navigationHeader = (function() {

    var init = function() {
        _setUpListners();
        // то, что должно произойти сразу!
    };

    var _setUpListners = function() {

        $('.hamburger').click(function(){
            var leftNavigation = $('.navigation').position().left;
            var leftHeaderLaptop = $('.header-laptop').position().left;

            if ($(window).width() > 768) {
                if(leftNavigation <= -600){
                    $('.navigation').animate({
                        left: '0'
                    }, 300);
                    $('.overlay').show();
                    $('body').css('overflow', 'hidden');
                } else {
                    $('.navigation').animate({
                        left: '-100%'
                    }, 300);
                    $('.overlay').hide();
                    $('.menu-hover').animate({
                        left: '-100%'
                    }, 300);
                    $('body').css('overflow', 'auto');
                }
            }else{
                if(leftHeaderLaptop <= -600){
                    $('.header-laptop').animate({
                        left: '0'
                    }, 300);
                    $('.overlay').show();
                    $('body').css('overflow', 'hidden');
                } else {
                    $('.header-laptop').animate({
                        left: '-100%'
                    }, 300);
                    $('.overlay').hide();
                    $('.menu-hover').animate({
                        left: '-100%'
                    }, 300);
                    $('body').css('overflow', 'auto');
                }
            }
        });

        $('.js-navigation__items').mouseenter(function(){

            // $('.menu-hover').hide();
            $('.menu-hover').stop( true, true ).animate({
                left: '-100%'
            }, 900, 'easeInOutQuint');

            /*$(this).find('.navigation__item').mouseenter(function () {
                var block = $(this).data("block");

                $('.menu-hover__inner[data-block="' + block + '"]')
                .stop(true, true)
                .show()
                .siblings()
                .hide();
            })*/

            if ($(window).width() > 768) {
                // $('.menu-hover').show('fast');
                $('.menu-hover').stop( true, true ).animate({
                    left: '100%'
                }, 900, 'easeInOutQuint');

                $(this).find('.navigation__item').mouseenter(function () {
                    var block = $(this).data("block");

                    $('.menu-hover__inner[data-block="' + block + '"]')
                    .stop(true, true)
                    // .show()
                    .fadeIn(500)
                    .siblings()
                    .hide();
                })
            }
        })

        $("body").click(function(e) {
            var leftHeaderLaptop = $('.header-laptop').position().left;

            if ($(window).width() > 768) {
                if($(e.target).closest(".navigation, .hamburger, .header-laptop").length==0) {
                    $(".navigation").animate({
                       left: '-100%'
                    }, 300);
                    $('.burger-menu').removeClass("burger-menu--opened");
                    $('.burger-menu').addClass("burger-menu--closed");
                    $('.overlay').hide();
                    $('.menu-hover').stop( true, true ).animate({
                        left: '-100%'
                    }, 300);
                    $('body').css('overflow', 'auto');
                }
            } else {
                if($(e.target).closest(".navigation, .hamburger, .header-laptop").length==0) {
                    $(".header-laptop").animate({
                       left: '-1000px'
                    }, 300);
                    $(".navigation").animate({
                       left: '-100%'
                    }, 300);
                    $('.burger-menu').removeClass("burger-menu--opened");
                    $('.burger-menu').addClass("burger-menu--closed");
                    $('.menu-hover').stop( true, true ).animate({
                        left: '-100%'
                    }, 300);
                    $('body').css('overflow', 'auto');

                    if (leftHeaderLaptop > -600) {
                        $('.overlay').hide();
                    }
                }
            }
        });

        $('.hamburger').on('click', function() {
          $(this).find('.burger-menu').toggleClass("burger-menu--opened");
          $(this).find('.burger-menu').toggleClass("burger-menu--closed");
          
        });

        $(window).resize(function () {
            if ($(window).width() > 768) {
                var wunWidth = $(window).width() - 700;

                $('.menu-hover').css('width', wunWidth);
            }
        })

    };

    return {
        init: init
    };

})();

$(document).ready(function() {

    // if ( $('selector').length ) {
        // myModule.init();
    // }

    navigationHeader.init();

}); // - > ready_end;
