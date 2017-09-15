var slickModule = (function() {

    var init = function() {
        _setUpListners();
        // то, что должно произойти сразу!
    };

    var _setUpListners = function() {
        // прослушка событий...
        console.log('привет! я в прослушке событий');

        $('.child-advertising__slider-w').slick({
            slidesToShow : 2,
            dots : true
        });
    };

    return {
        init: init
    };

})();

$(document).ready(function() {

    slickModule.init();

}); // - > ready_end;

