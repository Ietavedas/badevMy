var animateModule = (function() {

    var init = function() {
        _setUpListners();
        // то, что должно произойти сразу!
    };

    var _setUpListners = function() {
        // прослушка событий...
        // console.log('привет! я в прослушке событий');

        // $('.r-sidebar').animate();

        $('.r-sidebar').effect(
            'drop',
            {
                'direction': 'down',
                mode: 'show'
            },
            /*{
                easing: 'easeInSine'
            },*/
            1000
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

    // animateModule.init();

}); // - > ready_end;
