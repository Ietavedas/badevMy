var matchHeightModule = (function() {

    var init = function() {
        _setUpListners();
        // то, что должно произойти сразу!
    };

    var _setUpListners = function() {
        // прослушка событий...
        // console.log('привет! я в прослушке событий');

        $('.r-logo__svgi-item').matchHeight();
    };

    return {
        init: init
    };

})();

$(document).ready(function() {

    // if ( $('selector').length ) {
    // myModule.init();
    // }

    matchHeightModule.init();

}); // - > ready_end;
