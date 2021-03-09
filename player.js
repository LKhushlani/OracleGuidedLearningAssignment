
function loadScript() 
{
var script = document.createElement('script');
script.src = "https://code.jquery.com/jquery-3.4.1.min.js";
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(script, s);
var script = document.createElement('script');
script.src = "https://code.jquery.com/ui/1.12.1/jquery-ui.js";
s.parentNode.insertBefore(script, s);

return new Promise((res, rej) => {
    script.onload = function () {
        $.getJSON("https://guidedlearning.oracle.com/player/latest/api/scenario/get/v_IlPvRLRWObwLnV5sTOaw/5szm2kaj/?callback=?", function (json) {
            $('head').append('<link rel="stylesheet" href="https://guidedlearning.oracle.com/player/latest/static/css/stTip.css" type="text/css" />');

            $.each(json['data']['structure']['steps'], function (index, element) {
                //  console.log("index", element['action']); 
                var data = element['action'];
                console.log(json['data']['tiplates'])

                $(function () {
                    //    console.log("data",data);
                    var selector = data['selector'];
                    var msg = ""
                    if (data.hasOwnProperty('contents')) {
                        msg = data['contents']['#content']
                    }

                    console.log(msg)
                    // console.log("selec", data['selector']);
                    var content_str = '<div  class="sttip"><div class="tooltip in"><div class="tooltip-arrow"></div><div class="tooltip-arrow second-arrow"></div><div class="popover-inner">' + json['data']['tiplates']['tip'] + '</div></div></div>';
                    $(selector).tooltip({
                        content: content_str,
                        show: "slideDown",
                        open: function (event, ui) {
                            ui.tooltip.hover(
                                function () {
                                    $(this).fadeTo("slow", 0.5);
                                });
                        }
                    }).addClass('showPrevBt');
                });
            });
        });

    }
    script.onerror = function () {
        console.log("Script Not Loaded")
    }
});
}

loadScript()
.then(() => {
    console.log('Script loaded!');
})
.catch(() => {
    console.error('Script loading failed! Handle this error');
});