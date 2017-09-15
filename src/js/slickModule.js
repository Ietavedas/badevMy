var slickModule = (function() {

    var init = function() {
        _setUpListners();
        // то, что должно произойти сразу!
    };

    var _setUpListners = function() {

        $('.hs-gallery__item-slider-w').slick({
            arrows : true,
            autoplay : true,
            autoplaySpeed : 2000,
            fade : true
        });

        $('.hs-gallery__slider-w').slick({
            variableWidth : true,
            adaptiveHeight : true,
            infinite : false,
            rows : 2,
            easing : 'easeInOutCubic',
            slidesToShow : 4,
            slidesToScroll : 2
        });

        $('.hs-reviews__slider-w').slick({
            slidesToShow : 3,
            slidesToScroll : 1,
            easing : 'easeInOutCubic',
            responsive: [
                {
                    breakpoint: 1230,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 836,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });

        $('.hs-stock__slider-w').slick({
            slidesToShow : 2,
            slidesToScroll : 1,
            easing : 'easeInOutCubic',
            rows : 2,
            dots : true,
            responsive: [
                {
                    breakpoint: 1030,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    };

    return {
        init: init
    };

})();

$(document).ready(function() {

    // if ( $('selector').length ) {
    // myModule.init();
    // }

    slickModule.init();

}); // - > ready_end;

