var myModule = (function() {
    var init = function() {
        _setUpListners();
        // то, что должно произойти сразу!
    };

    var _setUpListners = function() {
        // прослушка событий...
        // console.log('привет! я в прослушке событий');

        $('.search__input-date_in').datepicker({
            minDate: 0 // запрет выбора прошедшей даты
        });

        $('.search__input-date_out').datepicker({
            minDate: 0
        });

        $('.sf-popup__input-date_in').datepicker({
            minDate: 0
        });

        $('.sf-popup__input-date_out').datepicker({
            minDate: 0
        });
    };

    return {
        init: init
    };
})();

myModule.init();
