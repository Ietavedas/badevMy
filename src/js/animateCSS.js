var animateCSS = (function(){

    var checkDistance = function (scrollTop, elem) {
        var
            offset = elem.offset().top,
            // windowHeight = Math.ceil($(window).height() / 1.5),
            windowHeight = Math.ceil($(window).height() / 1),
            topBorder = offset - scrollTop - windowHeight,
            bottomEdge = elem.outerHeight(true) + offset,
            bottomBorder = scrollTop + windowHeight - bottomEdge;

        return topBorder <= 0 && bottomBorder <= 0;
    };

    var animationsActions = {
        /* toTop : function () {
            // console.log('to top');

            $(this).addClass('toTop');
        },

        toRight : function () {
            // console.log('to right');

            $(this).addClass('toRight');
        },

        width : function () {
            // console.log('width');

            var $this = $(this),
                width = $this.width() + 20;

            $this.css('opacity', 1);
            $this.width(width);
        }, */

        animatesvgFullprice : function() {

            var
                duration = 2000,
                easing = 'easeInOutCubic';

            $('.svg__fullprice, .svg__bus').animate(
                {
                    'stroke-dasharray' : '30000',
                    'stroke-dashoffset' : '0'
                },
                duration,
                easing
            );

        },

        animatesvgWaterfun : function() {

            // console.log('animatesvgWaterfun');

            var
                duration = 2000,
                easing = 'easeInOutCubic';

            $('.svg_sunincircle, .svg__snowflakeincircle').animate(
                {
                    'stroke-dasharray' : '700',
                    'stroke-dashoffset' : '0'
                },
                duration,
                easing
            );
        },

        animatesvg : function() {

            // console.log('animate svg');

            var
                duration = 2000,
                easing = 'easeInOutCubic';

            $('.svg__sun').each(function(index, element) {

                $('.svg__sun, .svg__winter').animate(
                    {
                        'stroke-dasharray' : '400',
                        'stroke-dashoffset' : '0'
                    },
                    duration,
                    easing
                );

                $('.svg__drop').animate(
                    {
                        'stroke-dasharray' : '800',
                        'stroke-dashoffset' : '0'
                    },
                    duration,
                    easing
                );

                $('.svg__area').animate(
                    {
                        'stroke-dasharray' : '500',
                        'stroke-dashoffset' : '0'
                    },
                    duration,
                    easing
                );

                $('.svg__height').animate(
                    {
                        'stroke-dasharray' : '2000',
                        'stroke-dashoffset' : '0'
                    },
                    duration,
                    easing
                );

            });

        }
    };


    return {
        init : function () {
            $(window).scroll(function() {
                var scrollTop = $(window).scrollTop();

                $('.animate').each(function () {
                    var $this = $(this);

                    if ( checkDistance(scrollTop, $this)) {

                        var animationType = $this.data('animate');


                        if (typeof $this.data('animated') == 'undefined') {

                            $this.data('animated', true);
                            animationsActions[animationType].call($this);

                        }

                    }
                });
            }); // -> scroll_end;
        }
    }

}());

animateCSS.init();