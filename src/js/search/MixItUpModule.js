jQuery(document).ready(function($){
    //open/close lateral filter
    $('.cd-filter-trigger').on('click', function(){
        triggerFilter(true);
    });
    $('.cd-filter .cd-close').on('click', function(){
        triggerFilter(false);
    });

    function triggerFilter($bool) {
        var elementsToTrigger = $([$('.cd-filter-trigger'), $('.cd-filter'), $('.cd-tab-filter'), $('.cd-gallery')]);
        elementsToTrigger.each(function(){
            $(this).toggleClass('filter-is-visible', $bool);
        });
    }

    /************************************
     MitItUp filter settings
     More details:
     https://mixitup.kunkalabs.com/
     or:
     http://codepen.io/patrickkunka/
     *************************************/

    buttonFilter.init();
    $('.search-apartments__list').mixItUp({
        controls: {
            enable: false
        },
        callbacks: {
            onMixStart: function(){
                $('.cd-fail-message').fadeOut(200);
            },
            onMixFail: function(){
                $('.cd-fail-message').fadeIn(200);
            }
        }
    });
});


/*****************************************************
 MixItUp - Define a single object literal
 to contain all filter custom functionality
 *****************************************************/
var buttonFilter = {
    // Declare any variables we will need as properties of the object
    $filters: null,
    groups: [],
    outputArray: [],
    outputString: '',

    // The "init" method will run on document ready and cache any jQuery objects we will need.
    init: function(){
        var self = this; // As a best practice, in each method we will asign "this" to the variable "self" so that it remains scope-agnostic. We will use it to refer to the parent "buttonFilter" object so that we can share methods and properties between all parts of the object.

        self.$filters = $('.search-form');
        self.$container = $('.search-apartments__list');

        self.$filters.find('.cd-filters').each(function(){
            var $this = $(this);

            self.groups.push({
                $inputs: $this.find('.filter'),
                active: '',
                tracker: false
            });
        });

        self.bindHandlers();
    },

    // The "bindHandlers" method will listen for whenever a button is clicked.
    bindHandlers: function(){
        var self = this;

        self.$filters.on('click', 'a', function(e){
            self.parseFilters();
        });
        self.$filters.on('change', function(){
            self.parseFilters();
        });
    },

    parseFilters: function(){
        var self = this;

        // loop through each filter group and grap the active filter from each one.
        for(var i = 0, group; group = self.groups[i]; i++){
            group.active = [];
            group.$inputs.each(function(){
                var $this = $(this);
                if($this.is('input[type="radio"]') || $this.is('input[type="checkbox"]')) {
                    if($this.is(':checked') ) {
                        group.active.push($this.attr('data-filter'));
                    }
                } else if($this.is('select')){
                    group.active.push($this.val());
                } else if( $this.find('.selected').length > 0 ) {
                    group.active.push($this.attr('data-filter'));
                }
            });
        }
        self.concatenate();
    },

    concatenate: function(){
        var self = this;

        self.outputString = ''; // Reset output string

        for(var i = 0, group; group = self.groups[i]; i++){
            self.outputString += group.active;
        }

        // If the output string is empty, show all rather than none:
        !self.outputString.length && (self.outputString = 'all');

        // Send the output string to MixItUp via the 'filter' method:
        if(self.$container.mixItUp('isLoaded')){
            self.$container.mixItUp('filter', self.outputString);
        }
    }
};