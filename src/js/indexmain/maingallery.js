var mainGallery = (function() {

    var init = function() {
        _setUpListners();
        // то, что должно произойти сразу!
    };

    var _setUpListners = function() {
        $('.gallery__slider').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: '<div class="g-prev"></div>',
            nextArrow: '<div class="g-next"></div>',
            responsive: [
                {
                    breakpoint: 480,
                    settings: {
                        slidesToScroll: 1,
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

    mainGallery.init();

}); // - > ready_end;
