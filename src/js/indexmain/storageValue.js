var inputValues = (function() {

    var init = function() {
        _setUpListners();
        // то, что должно произойти сразу!
    };

    var _setUpListners = function() {
            /*if (typeOf(Storage) != "undefined") {
            }*/
            
            // localStorage.getItem(id);

        function save(){
            // if (typeOf(Storage) != "undefined"){
            // }
                var id = $('#ticket_arrival');
                var val = $('#ticket_arrival').val();

                localStorage.setItem(id, val);
        }

        $('.js-ticket-button').click(function () {
            save();
        })
    };

    return {
        init: init
    };

})();

$(document).ready(function() {

    // if ( $('selector').length ) {
        // myModule.init();
    // }

    inputValues.init();

}); // - > ready_end;
