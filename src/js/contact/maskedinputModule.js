var maskedinputModule = (function() {

    var init = function() {
        _setUpListners();
        // то, что должно произойти сразу!
    };

    var _setUpListners = function() {
        // прослушка событий...

        var
            time = $('.c-book__input_time'),
            phone = $('.c-book__input_phone');

        $(phone).mask("8 (999) 999-99-99", { autoсlear: false });


        $.mask.definitions['H']='[012]';
        $.mask.definitions['M']='[012345]';

        $(time).mask('H9:M9');
    };

    return {
        init: init
    };

})();

maskedinputModule.init();