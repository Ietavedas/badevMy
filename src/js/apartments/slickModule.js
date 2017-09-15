var slickModule = (function() {

    var init = function() {
        _setUpListners();
        // то, что должно произойти сразу!
    };

    var _setUpListners = function() {
        // прослушка событий...
        // console.log('привет! я в прослушке событий');

        $('.aprt-advertising__slider-w').slick({
            slidesToShow : 2,
            dots : true,
            responsive: [
                {
                    breakpoint: 1030,
                    settings: {
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 748,
                    settings: {
                        slidesToShow: 1,
                        arrows: false
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

    slickModule.init();

}); // - > ready_end;

