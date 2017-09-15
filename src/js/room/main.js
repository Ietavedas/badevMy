var myModule = (function() {

    var init = function() {
        _setUpListners();
        // то, что должно произойти сразу!
    };

    var _setUpListners = function() {
        // прослушка событий...
        // console.log('привет! я в прослушке событий');
    };

    return {
        init: init
    };

})();

$(document).ready(function() {

    // if ( $('selector').length ) {
        // myModule.init();
    // }

    // myModule.init();

}); // - > ready_end;
