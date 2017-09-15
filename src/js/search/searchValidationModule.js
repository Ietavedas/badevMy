var searchValidationModule = (function() {

    var init = function() {
        searchInputGrownups();
        searchInputChildren();
        sfPopupInputGrownups();
    };

    // Валидация input для popup (старше 12)

    var sfPopupInputGrownups = function() {
        // прослушка событий...
        // console.log('привет! я в прослушке событий');

        $('.sf-popup__form').on('submit', function() {

            var
                $this = $(this),
                container = $this.closest('.sf-popup__form'),
                sfInputGrownups = container.find('.sf-popup__input_grownups'),
                error_sfInputGrownups = 0,
                error_sfInputGrownupsText = "",
                pattern_sfInputGrownups = /^\d+$/; // ввод только цифр

            if ( sfInputGrownups.val().search(pattern_sfInputGrownups) == -1 ) {

                error_sfInputGrownups = 1;

                console.log('true');

            } else {

                error_sfInputGrownups = 0;

                console.log('false');

            }


            return false;
        });

        var
            searchInputGrownups = $('.sf-popup__input_grownups'),

            pattern_searchInputGrownups = /^\d+$/,

            error_searchInputGrownups = 0,

            error_searchInputGrownupsText = "";

        // console.log(searchInputGrownups.val());

        searchInputGrownups.on('change', function() {

            // console.log($.trim(searchInputGrownups.val()));

            if ( searchInputGrownups.val().search(pattern_searchInputGrownups) == -1 ) {

                error_searchInputGrownups = 1;

            } else {

                error_searchInputGrownups = 0;

            }

            if (error_searchInputGrownups == 0) {

                // return true;

                error_searchInputGrownupsText = '<svg viewBox="0 0 9 9"><g><polyline class="check__cls-1" points="1 6 3 8 8 1"/></g></svg>';

                $('.search__input_grownups-messenger-check').hide().fadeIn(500).html(error_searchInputGrownupsText);
                $('.search__input_grownups-messenger-error').hide().fadeIn(500).html('');

                $('.search__grownups-count-messenger-text').hide().fadeIn(500).html('');

            } else {

                error_searchInputGrownupsText = '<svg viewBox="0 0 2 11.23"><g><line class="error__cls-1" x1="1" y1="1" x2="1" y2="6.97"/><line class="error__cls-1" x1="1" y1="10.23" x2="1" y2="9.97"/></g></svg>';

                $('.search__input_grownups-messenger-error').hide().fadeIn(500).html(error_searchInputGrownupsText);
                $('.search__input_grownups-messenger-check').hide().fadeIn(500).html('');

                $('.search__grownups-count-messenger-text').hide().fadeIn(500).html('<div>Введите корректное значение</div>');

            }
        });
    };

    var searchInputChildren = function() {
        // прослушка событий...
        // console.log('привет! я в прослушке событий');

        var
            searchInputChildren = $('.search__input-children'),

            pattern_searchInputChildren = /^\d+$/,

            error_searchInputChildren = 0,

            error_searchInputChildrenText = "";

        searchInputChildren.on('change', function() {

            if ( searchInputChildren.val().search(pattern_searchInputChildren) == -1 ) {

                error_searchInputChildren = 1;

            } else {

                error_searchInputChildren = 0;

            }

            if (error_searchInputChildren == 0) {

                // return true;

                error_searchInputChildrenText = '<svg viewBox="0 0 9 9"><g><polyline class="check__cls-1" points="1 6 3 8 8 1"/></g></svg>';

                $('.search__input_children-messenger-check').hide().fadeIn(500).html(error_searchInputChildrenText);
                $('.search__input_children-messenger-error').hide().fadeIn(500).html('');

                $('.search__children-count-messenger-text').hide().fadeIn(500).html('');

            } else {

                error_searchInputChildrenText = '<svg viewBox="0 0 2 11.23"><g><line class="error__cls-1" x1="1" y1="1" x2="1" y2="6.97"/><line class="error__cls-1" x1="1" y1="10.23" x2="1" y2="9.97"/></g></svg>';

                $('.search__input_children-messenger-error').hide().fadeIn(500).html(error_searchInputChildrenText);
                $('.search__input_children-messenger-check').hide().fadeIn(500).html('');

                $('.search__children-count-messenger-text').hide().fadeIn(500).html('<div>Введите корректное значение</div>');

            }
        });
    };

    var searchInputGrownups = function() {
        // прослушка событий...
        // console.log('привет! я в прослушке событий');
        
        var
            searchInputGrownups = $('.search__input_grownups'),

            pattern_searchInputGrownups = /^\d+$/,

            error_searchInputGrownups = 0,

            error_searchInputGrownupsText = "";

        // console.log(searchInputGrownups.val());

        searchInputGrownups.on('change', function() {

            // console.log($.trim(searchInputGrownups.val()));

            if ( searchInputGrownups.val().search(pattern_searchInputGrownups) == -1 ) {

                error_searchInputGrownups = 1;

                // console.log(error_searchInputGrownups);

            } else {

                error_searchInputGrownups = 0;

                // console.log(error_searchInputGrownups);

            }

            if (error_searchInputGrownups == 0) {

                // return true;

                error_searchInputGrownupsText = '<svg viewBox="0 0 9 9"><g><polyline class="check__cls-1" points="1 6 3 8 8 1"/></g></svg>';

                $('.search__input_grownups-messenger-check').hide().fadeIn(500).html(error_searchInputGrownupsText);
                $('.search__input_grownups-messenger-error').hide().fadeIn(500).html('');

                $('.search__grownups-count-messenger-text').hide().fadeIn(500).html('');

            } else {

                error_searchInputGrownupsText = '<svg viewBox="0 0 2 11.23"><g><line class="error__cls-1" x1="1" y1="1" x2="1" y2="6.97"/><line class="error__cls-1" x1="1" y1="10.23" x2="1" y2="9.97"/></g></svg>';

                $('.search__input_grownups-messenger-error').hide().fadeIn(500).html(error_searchInputGrownupsText);
                $('.search__input_grownups-messenger-check').hide().fadeIn(500).html('');

                $('.search__grownups-count-messenger-text').hide().fadeIn(500).html('<div>Введите корректное значение</div>');

            }
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

    // searchValidationModule.init();

}); // - > ready_end;
