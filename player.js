function loadScript() {
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


                    setTimeout(() => {
                        var data = element['action'];
                        $(function () {

                            var selector = data['selector'];
                            var contents = ""
                            var selectors = ""
                            var classes = ""
                            var placement = ""
                            if (data.hasOwnProperty('contents')) {
                                contents = data['contents']['#content']
                                selectors = data['selector'];
                                classes = data['classes'];
                                placement = data['placement'];
                                console.log("selec", selectors, classes, contents, placement);

                            }
                            var content_str = `
                                        <div  class="sttip">
                                        <div class="tooltip in">
                                           <div class="tooltip-arrow"></div>
                                           <div class="tooltip-arrow second-arrow"></div>
                                           <div class="popover-inner">
                                                    
                                              <div role="region" tabindex="999" aria-label="Steps">
                                                 <div data-iridize-role="title" class="popover-title">
                                                            
                                                    <div class="view-less-container">
                                                       <div class="view-less">
                                                          <button class="icon-chevron-down" aria-label="View less contents"></button>
                                                       </div>
                                                       <button aria-label="Close" data-iridize-role="closeBt">&#10005;</button>
                                                    </div>
                                                 </div>
                            
                                                 <div class="popover-content">
                                                    <div data-iridize-id="content"></div>
                                                    <div class="view-more">
                                                       <button class="icon-chevron-up" aria-label="View more contents"></button>
                                                    </div>`
                                + contents +
                                ` </div>
                                                
                                                <div class="stFooter" data-iridize-id="footer">
                                                    <div>
                                                       <span class="steps-count">Step 
                                                 
                                                          <span data-iridize-role="stepCount"></span>/
                                                 
                                                          <span
                                                data-iridize-role="stepsCount"></span>
                                                       </span>
                                                       <button tabindex="999"
                                            class="prev-btn default-later-btn" data-iridize-role="laterBt">Remind me later</button>
                                                       <span
                                            class="powered-by">Powered by </span>
                                                    </div>
                                                    <div data-iridize-role="nextBtPane">
                                                       <button tabindex="999" class="prev-btn default-prev-btn"
                                            data-iridize-role="prevBt" aria-label="">Back</button>
                                                       <a tabindex="999" role="button" aria-label=""
                                            class="next-btn" data-iridize-role="nextBt" href="javascript:void(0);">Next</a>
                                                    </div>
                                                 </div>
                                              </div>
                                           </div>
                                        </div>
                                        `

                                                        $(selector).tooltip({
                                                            content: content_str,
                                                            show: {
                                                                effect: "slide",
                                                                duration: 3000
                                                            },
                                                            position: placement,
                                                        }).addClass(classes);

                                                        $(selector).tooltip({
                                                            content: content_str,
                                                            show: {
                                                                effect: "slide",
                                                                duration: 3000
                                                            },
                                                            position: placement,
                                                        }).tooltip('open');
                            // $(selector).tooltip({
                            //     // items: 'a.target',
                            //     content: contents,
                            //     show: null, // show immediately
                            //     open: function (event, ui) {
                            //         if (typeof (event.originalEvent) === 'undefined') {
                            //             return false;
                            //         }

                            //         var $id = $(ui.tooltip).attr('id');

                            //         // close any lingering tooltips
                            //         $('div.ui-tooltip').not('#' + $id).remove();

                            //         // ajax function to pull in data and add it to the tooltip goes here
                            //     },
                            //     close: function (event, ui) {
                            //         ui.tooltip.hover(function () {
                            //             $(this).stop(true).fadeTo(400, 1);
                            //         },
                            //             function () {
                            //                 $(this).fadeOut('400', function () {
                            //                     $(this).remove();
                            //                 });
                            //             });
                            //     }
                            // });


                            setTimeout(() => { $(selector).tooltip('close') })
                        });
                    }, index * 3000)

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