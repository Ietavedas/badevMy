var tabsModule = (function() {

    var init = function() {
        slidingLine();
        _setUpListners_1();
        _setUpListners_2();
        _setUpListners_3();
        _setUpListners_4();
        _setUpListners_5();
        _setUpListners_6();
        _setUpListners_7();
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

    var _setUpListners_1 = function() {

        $('.tabs__link1').on('click', function(e) {
            e.preventDefault();

            $.ajax(
                {
                    url: 'ajax-content/indexmain/entertaiment-tab-1.html',

                    type: 'get',

                    success: function(d_data,s) {

                        $('.tabs__content').html(d_data).hide().stop(true, true).fadeIn(400);

                        $('.entertainment-slider').slick({
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            prevArrow: '<div class="entertainment-prev"></div>',
                            nextArrow: '<div class="entertainment-next"></div>'
                        });

                    },

                    error: function() {
                        alert("Fault");
                    }
                }
            );

        }); // - > _setUpListners_f_end;

    };

    var _setUpListners_2 = function() {

        $('.tabs__link2').on('click', function(e) {
            e.preventDefault();

            $.ajax(
                {
                    url: 'ajax-content/indexmain/entertaiment-tab-2.html',

                    type: 'get',

                    success: function(d_data,s) {

                        $('.tabs__content').html(d_data).hide().stop(true, true).fadeIn(400);

                        $('.entertainment-slider').slick({
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            prevArrow: '<div class="entertainment-prev"></div>',
                            nextArrow: '<div class="entertainment-next"></div>'
                        });
                    },

                    error: function() {
                        alert("Fault");
                    }
                }
            );

        }); // - > _setUpListners_s_end;

    };

    var _setUpListners_3 = function() {

        $('.tabs__link3').on('click', function(e) {
            e.preventDefault();

            $.ajax(
                {
                    url: 'ajax-content/indexmain/entertaiment-tab-3.html',

                    type: 'get',

                    success: function(d_data,s) {

                        $('.tabs__content').html(d_data).hide().stop(true, true).fadeIn(400);

                        $('.entertainment-slider').slick({
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            prevArrow: '<div class="entertainment-prev"></div>',
                            nextArrow: '<div class="entertainment-next"></div>'
                        });

                    },

                    error: function() {
                        alert("Fault");
                    }
                }
            );

        }); // - > _setUpListners_t_end;

    };

    var _setUpListners_4 = function() {

        $('.tabs__link4').on('click', function(e) {
            e.preventDefault();

            $.ajax(
                {
                    url: 'ajax-content/indexmain/entertaiment-tab-4.html',

                    type: 'get',

                    success: function(d_data,s) {

                        $('.tabs__content').html(d_data).hide().stop(true, true).fadeIn(400);

                        $('.entertainment-slider').slick({
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            prevArrow: '<div class="entertainment-prev"></div>',
                            nextArrow: '<div class="entertainment-next"></div>'
                        });

                    },

                    error: function() {
                        alert("Fault");
                    }
                }
            );

        }); // - > _setUpListners_t_end;

    };

    var _setUpListners_5 = function() {

        $('.tabs__link5').on('click', function(e) {
            e.preventDefault();

            $.ajax(
                {
                    url: 'ajax-content/indexmain/entertaiment-tab-5.html',

                    type: 'get',

                    success: function(d_data,s) {

                        $('.tabs__content').html(d_data).hide().stop(true, true).fadeIn(400);

                        $('.entertainment-slider').slick({
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            prevArrow: '<div class="entertainment-prev"></div>',
                            nextArrow: '<div class="entertainment-next"></div>'
                        });

                    },

                    error: function() {
                        alert("Fault");
                    }
                }
            );

        }); // - > _setUpListners_t_end;

    };

    var _setUpListners_6 = function() {

        $('.tabs__link6').on('click', function(e) {
            e.preventDefault();

            $.ajax(
                {
                    url: 'ajax-content/indexmain/entertaiment-tab-6.html',

                    type: 'get',

                    success: function(d_data,s) {

                        $('.tabs__content').html(d_data).hide().stop(true, true).fadeIn(400);

                        $('.entertainment-slider').slick({
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            prevArrow: '<div class="entertainment-prev"></div>',
                            nextArrow: '<div class="entertainment-next"></div>'
                        });

                    },

                    error: function() {
                        alert("Fault");
                    }
                }
            );

        }); // - > _setUpListners_t_end;

    };

    var _setUpListners_7 = function() {

        $('.tabs__link7').on('click', function(e) {
            e.preventDefault();

            $.ajax(
                {
                    url: 'ajax-content/indexmain/entertaiment-tab-7.html',

                    type: 'get',

                    success: function(d_data,s) {

                        $('.tabs__content').html(d_data).hide().stop(true, true).fadeIn(400);

                        $('.entertainment-slider').slick({
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            prevArrow: '<div class="entertainment-prev"></div>',
                            nextArrow: '<div class="entertainment-next"></div>'
                        });

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
