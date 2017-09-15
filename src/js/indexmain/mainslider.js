var sliderBlock = (function() {

    var init = function() {
        _setUpListners();
        // то, что должно произойти сразу!
    };

    var _setUpListners = function() {
        $('.slider').slick({
            dots: true,
            dotsClass: "dots",
            prevArrow: '<div class="arr-prev"></div>',
            nextArrow: '<div class="arr-next"></div>',
            responsive: [
                {
                    breakpoint: 10000,
                    settings: {
                        appendDots: $('.slide-control'),
                        appendArrows: $('.slide-control')
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        appendDots: $('.slider-wrap__left'),
                        appendArrows: $('.slider')
                    }
                }
            ]
        });

        $('.js-front-search__block').add($('#ui-datepicker-div')).mouseenter(function(){
            var _this = $(this);
            var data = $(this).data('active');
            var overlay = $('.overlay');
            $('.datepicker-here').datepicker("hide").blur();

            if ($(window).width() > 480) {
                if (overlay.is(":hidden")) {
                    _this.addClass('active').siblings().removeClass('active');

                    _this.parents('.front-search').find('.front-search__form-wrap[data-active="'+ data +'"]')
                    // .css('display', 'block')
                    .stop( true, true )
                    // .fadeIn()
                    .animate({
                        right: "300px"
                    })
                    .siblings()
                    // .css('display', 'none')
                    .animate({
                        right: "0px"
                    });

                    // $('#ui-datepicker-div').mouseenter(function () {
                    //     _this.parents('.front-search').find('.front-search__form-wrap[data-active="'+ data +'"]')
                    //     // .css('display', 'block')
                    //     .css({
                    //         right: "300px"
                    //     });
                    // })
                }
            }else if($(window).width() < 481) {
                if (overlay.is(":hidden") && $('.front-search__form-wrap').is(":hidden")) {
                    _this.addClass('active').siblings().removeClass('active');

                    _this.parents('.front-search').find('.front-search__form-wrap[data-active="'+ data +'"]')
                    // .css('display', 'block')
                    .stop( true, true )
                    .fadeIn()
                    // .animate({
                    //  right: "300px"
                    // })
                    .siblings()
                    // .css('display', 'none')
                    // .animate({
                    //  right: "0px"
                    // });
                    .fadeOut();
                }
            }

        });

        $('#ui-datepicker-div').mouseenter(function(){
            $(".front-search__form-wrap").stop();
            $(this).stop();
        })

        $('#ui-datepicker-div').mouseleave(function(){
            $(this).hide();
        })

        

        // $('.front-search__form-wrap').click(function () {
        //     $('.front-search__form-wrap').hide();
        // })

        $('.front-search').mouseleave(function(){
            // $('.front-search__form-wrap').css('display', 'none');
            $('.datepicker-here').datepicker("hide").blur();
            $('.front-search__form-wrap').animate({
                    right: "0px"
                });;

            $('.js-front-search__block').removeClass('active');

        });

        if ($(window).width() > 1621) {
            $('.slide').css('height', $(window).outerHeight() - 95);
            $('.navigation').css('height', $(window).outerHeight() - 95);
            $('.menu-hover').css('height', $(window).outerHeight() - 95);
        }else if($(window).width() < 481){
            $('.slide').css('height', 'auto');
            $('.navigation').css('height', 'auto');
            $('.menu-hover').css('height', 'auto');
        }else{
            $('.slide').css('height', $(window).outerHeight() - 137);
            $('.navigation').css('height', $(window).outerHeight() - 137);
            $('.menu-hover').css('height', $(window).outerHeight() - 137);
        }

        $(window).resize(function () {
            if ($(window).width() > 1621) {
                $('.slide').css('height', $(window).outerHeight() - 95);
                $('.navigation').css('height', $(window).outerHeight() - 95);
                $('.menu-hover').css('height', $(window).outerHeight() - 95);
            }else if($(window).width() < 481){
                $('.slide').css('height', 'auto');
                $('.navigation').css('height', 'auto');
                $('.menu-hover').css('height', 'auto');
            }else{
                $('.slide').css('height', $(window).outerHeight() - 137);
                $('.navigation').css('height', $(window).outerHeight() - 137);
                $('.menu-hover').css('height', $(window).outerHeight() - 137);
            }
        });

    };

    $('.datepicker-here').datepicker();

    

    return {
        init: init
    };

})();

$(document).ready(function() {

    // if ( $('selector').length ) {
        // myModule.init();
    // }

    sliderBlock.init();

}); // - > ready_end;
