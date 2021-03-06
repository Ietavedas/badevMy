var lightgalleryModule = (function() {

    var init = function() {
        _setUpListners();
        // то, что должно произойти сразу!
    };

    var _setUpListners = function() {
        // прослушка событий...
        // console.log('привет! я в прослушке событий');

        // $('.gallery__slide-link').lightGallery({
        //     mode : 'lg-zoom-out-big',
        //     speed : 500,
        //     thumbnail : true,
        //     showThumbByDefault : true,
        //     // thumbWidth : 100, // Данная настройка определяет ширину миниатюр. По умолчанию 100px
        //     // thumbMargin : 50 // Отступ между изображениями
        //     loop : true, // цикличное отображение нашей галереи
        //     escKey : true, // мы можем вернуться к сайту, нажав клавишу esc
        //     counter : true, // отображает счетчик изображения галереи
        //     // auto : true,
        //     // animateThumb : false // Выбор слада по миниатюрам. Должна быть включена настройка  thumbWidth
        //     download : false,
        //     selector : 'li'
        // });

        $('.gallery__slider').lightGallery({
            mode : 'lg-zoom-out-big',
            speed : 500,
            thumbnail : true,
            showThumbByDefault : true,
            // thumbWidth : 100, // Данная настройка определяет ширину миниатюр. По умолчанию 100px
            // thumbMargin : 50 // Отступ между изображениями
            loop : true, // цикличное отображение нашей галереи
            escKey : true, // мы можем вернуться к сайту, нажав клавишу esc
            counter : true, // отображает счетчик изображения галереи
            // auto : true,
            // animateThumb : false // Выбор слада по миниатюрам. Должна быть включена настройка  thumbWidth
            download : false
            // selector : 'li'
            // selector : 'a'
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

    lightgalleryModule.init();

}); // - > ready_end;
