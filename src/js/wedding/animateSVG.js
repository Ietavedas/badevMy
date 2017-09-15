var animateSVG = (function() {

    var init = function() {
        _setUpListners();
        // то, что должно произойти сразу!
    };

    var _setUpListners = function() {

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