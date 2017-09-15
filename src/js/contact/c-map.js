var mapModule = (function() {

    var init = function() {
        _setUpListners();
        // то, что должно произойти сразу!
    };

    var _setUpListners = function() {

        var map, route;

        // open\close photo

        var complexMap = function() {
            // if (typeof map == "undefined") {
            //     // $('#ymap').css('height','400px');
                    
            // }
            // if (typeof map != "undefined") {
            //     if (typeof route != "undefined")
                    
            // }

            // map = new ymaps.Map("ymap", {
            //     center: [55.12739548, 60.33775204],
            //     zoom: 10
            // });

            ymaps.ready(init); 

            function init() { 
                var map = new ymaps.Map("ymap", { 
                    center: [55.12739548, 60.33775204], 
                    zoom: 16, 
                    controls: [] 
                }); 
            map.geoObjects.remove(route);
            if ($('#point-from').val()!='') {
                ymaps.geocode($('#point-from').val()).then(
                    function(res) {
                        ymaps.route([res.geoObjects.get(0).geometry.getCoordinates(),
                                     [55.12739548, 60.33775204]]).then(
                            function (route_res) {
                                route = route_res;
                                map.geoObjects.add(route);
                                console.log(route);
                            });
                    }
                );
            }
            else {
                route = new ymaps.Placemark([55.12739548, 60.33775204], { hintContent: 'Комплекс', balloonContent: 'Пансионат на озере Большой Теренкуль' });
                map.geoObjects.add(route);
            }
            map.setCenter([55.12739548, 60.33775204],10);
            };
        }

        // complexMap();

        $('#complex').click(function(){
            if ($('#complex').hasClass('active')==false) {
                $('#complex').addClass('active');
                $('#office').removeClass('active');
                $('#officeTab').addClass('inactive');
                $('#complexTab').removeClass('inactive');
                complexMap();
            }
        });

        $('#office').click(function(){
            if ($('#office').hasClass('active')==false) {
                $('#office').addClass('active');
                $('#complex').removeClass('active');
                $('#complexTab').addClass('inactive');
                $('#officeTab').removeClass('inactive');
            }
        });

        $('#show-map').on('click', function(){

            ymaps.ready(init); 

            function init(){    
                map = new ymaps.Map("ymap", {
                    center: [55.12739548, 60.33775204],
                    zoom: 10
                });
            }
            
            complexMap();

        });

        $('#show-map').trigger('click');


    };

    return {
        init: init
    };

})();

$(document).ready(function() {

    // if ( $('selector').length ) {
        // myModule.init();
    // }

    mapModule.init();

}); // - > ready_end;

// var mapModule = (function() { 
//     var init = function() { 
//         _setUpListners(); 
//         // то, что должно произойти сразу! 
//     }; 

// var _setUpListners = function() { 
//     // прослушка событий... 
//     ymaps.ready(init); 

//     function init() { 
//         var myMap = new ymaps.Map("ymap", { 
//         center: [55.76, 37.64], 
//         zoom: 16, 
//         controls: [] 
//     }); 

   
//     myMap.behaviors.disable(['scrollZoom']); 


//     } 
// }; 

// return { 
//     init: init 
// }; 

// })();