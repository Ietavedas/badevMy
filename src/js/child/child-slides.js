var childSlide = (function() {

    var init = function() {
        _setUpListners();
        // то, что должно произойти сразу!
    };

    var _setUpListners = function() {

        $('.content-gallery__slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true
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

    childSlide.init();

}); // - > ready_end;
