var fixedMenu = (function(){

	 var init = function() {
        _setUpListners();
        // то, что должно произойти сразу!
    };

    var _setUpListners = function(){
    	$(window).scroll(function(){
            var heightOfTop = $('.slider-wrap').height() + 152;

            if($(this).scrollTop() > heightOfTop && ($(this).width() > 767)){
                $('.header').addClass('header-fixed');
                $('.main').css('margin-top', '0px');

            } else if($(this).scrollTop() < heightOfTop){
                $('.header').removeClass('header-fixed');
                if ($(window).width() < 1480) {
                    $('.main').css('margin-top', '137px');
                }else{
                    $('.main').css('margin-top', '95px');
                }
            }
        });

        $(window).scroll(function(){
            var heightOfTop = $('.slider-wrap').height() + 152;

            if($(this).scrollTop() > ($(this).width() > 767)){
                $('.header').addClass('header-fixed');
                $('.main').css('margin-top', '0px');

            } else if($(this).scrollTop() < heightOfTop){
                $('.header').removeClass('header-fixed');
                if ($(window).width() < 1480) {
                    $('.main').css('margin-top', '137px');
                }else{
                    $('.main').css('margin-top', '95px');
                }
            }
        });
    }

    return {
        init: init
    };

})();

$(document).ready(function() {

    // if ( $('selector').length ) {
        // myModule.init();
    // }

    fixedMenu.init();

}); // - > ready_end;