var tabsModule = (function() {

    var init = function() {
        slidingLine();
        _setUpListners_f();
        _setUpListners_s();
        _setUpListners_t();
    };

    var slidingLine = function() {

        var
            nav = $('.tabs__list'),
            line = $('<div>').appendTo(nav),
            activeLi,
            lineWidth,
            liPos;

        function refresh() {
            activeLi = nav.find('li.active__item');

            lineWidth = activeLi.outerWidth();

            liPos = activeLi.position().left;

            // console.log(liPos);
        }

        refresh();

        nav.css('position', 'relative');

        function lineSet() {
            line.css({
                'position' : 'absolute',
                'background-color' : '#06628d',
                'bottom' : '0',
                'height' : '1px'
            }).animate({
                'left' : liPos,
                'width' : lineWidth
            }, 200);
        }

        lineSet();

        nav.find('li').on('click', function() {

            activeLi.removeClass('active__item');

            $(this).addClass('active__item');

            refresh();

            lineSet();

        });
    };

    var _setUpListners_f = function() {

        $('.tabs__link_outdoor-pool-f').on('click', function(e) {
            e.preventDefault();

            $.ajax(
                {
                    url: 'ajax-content/hotsprings/outdoor-pool-f.html',

                    type: 'post',

                    success: function(d_data,s) {

                        $('.tabs__content').html(d_data).hide().stop(true, true).fadeIn(400);

                        $('.hs-gallery__slider-w').slick({
                            variableWidth : true,
                            adaptiveHeight : true,
                            infinite : false,
                            rows : 2,
                            easing : 'easeInOutCubic',
                            slidesToShow : 4,
                            slidesToScroll : 2
                        });

                        $('.hs-gallery__lightgallery').lightGallery({
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
                            download : false,
                            selector : 'li'
                        });

                        $('.hs-gallery__item-slider-w').slick({
                            arrows : true,
                            autoplay : true,
                            autoplaySpeed : 2000,
                            fade : true
                        });

                    },

                    error: function() {
                        alert("Fault");
                    }
                }
            );

        }); // - > _setUpListners_f_end;

    };

    var _setUpListners_s = function() {

        $('.tabs__link_outdoor-pool-s').on('click', function(e) {
            e.preventDefault();

            $.ajax(
                {
                    url: 'ajax-content/hotsprings/outdoor-pool-s.html',

                    type: 'post',

                    success: function(d_data,s) {

                        $('.tabs__content').html(d_data).hide().stop(true, true).fadeIn(400);

                        $('.hs-gallery__slider-w').slick({
                            variableWidth : true,
                            adaptiveHeight : true,
                            infinite : false,
                            rows : 2,
                            easing : 'easeInOutCubic',
                            slidesToShow : 4,
                            slidesToScroll : 2
                        });

                        $('.hs-gallery__lightgallery').lightGallery({
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
                            download : false,
                            selector : 'li'
                        });

                        $('.hs-gallery__item-slider-w').slick({
                            arrows : true,
                            autoplay : true,
                            autoplaySpeed : 2000,
                            fade : true
                        });
                    },

                    error: function() {
                        alert("Fault");
                    }
                }
            );

        }); // - > _setUpListners_s_end;

    };

    var _setUpListners_t = function() {

        $('.tabs__link_outdoor-pool-t').on('click', function(e) {
            e.preventDefault();

            $.ajax(
                {
                    url: 'ajax-content/hotsprings/outdoor-pool-t.html',

                    type: 'post',

                    success: function(d_data,s) {

                        $('.tabs__content').html(d_data).hide().stop(true, true).fadeIn(400);

                    },

                    error: function() {
                        alert("Fault");
                    }
                }
            );

        }); // - > _setUpListners_t_end;

    };

    return {
        init: init
    };

})();

$(document).ready(function() {

    // if ( $('selector').length ) {
        // myModule.init();
    // }

    tabsModule.init();

}); // - > ready_end;
