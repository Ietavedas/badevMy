var animateSVG = (function() {

    var init = function() {
        _setUpListners();
        // то, что должно произойти сразу!
    };

    var _setUpListners = function() {
        // прослушка событий...
        // console.log('привет! я в прослушке событий');

        $('.animateSVG').animate(
            {
                'stroke-dasharray' : '1200',
                'stroke-dashoffset' : '0'
            },
            5000,
            'easeInOutCubic'
        );

    };

    return {
        init: init
    };

})();

$(document).ready(function() {

    // if ( $('selector').length ) {
        // myModule.init();
    // }

    animateSVG.init();

}); // - > ready_end;
