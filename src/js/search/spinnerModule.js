var spinnerModule = (function() {

    var init = function() {
        _setUpListners();
        // то, что должно произойти сразу!
    };

    var _setUpListners = function() {
        // прослушка событий...
        // console.log('привет! я в прослушке событий');

        $('.sf-popup__spinner').spinner({
            icons : {
                up : 'up',
                down : 'down'
            },
            min : 0,
            max : 8
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

    // spinnerModule.init();

}); // - > ready_end;
