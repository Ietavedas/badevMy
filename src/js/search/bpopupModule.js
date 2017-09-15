var bpopupModule = (function() {

    var init = function() {
        _setUpListners();
        // то, что должно произойти сразу!
    };

    var _setUpListners = function() {
        // прослушка событий...
        // console.log('привет! я в прослушке событий');

        $('.search-apartments__button-book').on('click', _showModal);

        $('.sa__button-book-reserved').on('click', function(e) {
            e.preventDefault();
        });
    };

    var _showModal = function(e) {
        e.preventDefault();

        $('.sf-popup-form-popup').bPopup({
            speed: 650,
            transition: 'slideDown'
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

    bpopupModule.init();

}); // - > ready_end;
