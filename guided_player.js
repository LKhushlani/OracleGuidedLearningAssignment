// initialized player.js
var script = document.createElement('script');
script.src = "https://code.jquery.com/jquery-3.4.1.min.js";
script.src = "https://code.jquery.com/ui/1.12.1/jquery-ui.js"
document.getElementsByTagName('head')[0].appendChild(script);
$.getJSON("https://guidedlearning.oracle.com/player/latest/api/scenario/get/v_IlPvRLRWObwLnV5sTOaw/5szm2kaj/?callback=?", function (json) {
    $('head').append('<link rel="stylesheet" href="https://guidedlearning.oracle.com/player/latest/static/css/stTip.css" type="text/css" />');
    console.log(json['data']['structure']['steps']);
    TourSteps = json['data']['structure']['steps'];
    (function ($, window) {
        $.tour = function (TourSteps) {

            var Tour = {
                start_id: 1,
                // work here 
                // init will kick off my start function 

                init: function () {

                    this.startGuide(steps);
                },

                startGuide: function (steps) {

                    $.each(steps, function (index, element) {

                        if (steps['followers']['next'] === 'eol0') {
                            console.log("Tour ended");
                            break;
                        }
                        // else render tooltip function 
                        this.rendertooltip();
                    }
                rendertooltip: function (step) {
                    var class_name = '.' + steps['action']['classes'] ;
                    var tag_name = 'some value';
                    var content = steps['action']['contents'];
                    var selector =  steps['action']['selector'];
                    var content_wrapper = '<div  class="sttip"><div class="tooltip in"><div class="tooltip-arrow"></div><div class="tooltip-arrow second-arrow"></div><div class="popover-inner">'+ content+ '</div></div></div>';
                    $(class_name).tooltip({  
                        items: 'a.gb_g',  
                        content: content_wrapper,
                        show: "slideDown", 
                        open: function(event, ui)  
                        {  
                           ui.tooltip.hover(  
                           function () {  
                              $(this).fadeTo("slow", 0.5);  
                           });  
                        }  
                     }).addClass(class_name);  
                    }    
    };
                Tour.init();
            };
        }(jQuery, window));
});