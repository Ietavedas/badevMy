var entertainment = (function() {

    var init = function() {
        _setUpListners();
        // то, что должно произойти сразу!
    };

    var _setUpListners = function() {
        $('.entertainment-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<div class="entertainment-prev"></div>',
            nextArrow: '<div class="entertainment-next"></div>'
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

    entertainment.init();

}); // - > ready_end;
