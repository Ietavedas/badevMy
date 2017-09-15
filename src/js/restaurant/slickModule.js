var slickModule = (function() {

    var init = function() {
        _setUpListners();
        // то, что должно произойти сразу!
    };

    var _setUpListners = function() {
        // прослушка событий...
        // console.log('привет! я в прослушке событий');

        $('.r-gallery__slider-w').slick({
            infinite : false,
            rows : 2,
            easing : 'easeInOutCubic',
            slidesToShow : 4,
            slidesToScroll : 2
        });

        $('.r-advertising__slider-w').slick({
            slidesToShow : 2,
            dots : true
        });

        $('.r-reviews__slider-w').slick({
            slidesToShow : 3,
            slidesToScroll : 1,
            easing : 'easeInOutCubic',
            responsive: [
                {
                    breakpoint: 1620,
                    settings: {
                        slidesToShow: 2
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
