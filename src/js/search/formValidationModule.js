var formValidationModule = (function() {

    var init = function() {
        _maskedInput();
    };

    var _maskedInput = function() {
        // прослушка событий...
        // console.log('привет! я в прослушке событий');

        $('.sf-popup__input-tel').mask("+7 ( 999 ) 999-99-99", { autoсlear: false });
    };

    return {
        init: init
    };

})();

$(document).ready(function() {

    formValidationModule.init();

}); // - > ready_end;
