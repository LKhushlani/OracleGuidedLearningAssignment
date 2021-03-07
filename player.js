// initialized player.js
var script = document.createElement('script');
script.src = "https://code.jquery.com/jquery-3.4.1.min.js";
script.src = "https://code.jquery.com/ui/1.12.1/jquery-ui.js"
document.getElementsByTagName('head')[0].appendChild(script);
$.getJSON("https://guidedlearning.oracle.com/player/latest/api/scenario/get/v_IlPvRLRWObwLnV5sTOaw/5szm2kaj/?callback=?",function(json){
$('head').append('<link rel="stylesheet" href="https://guidedlearning.oracle.com/player/latest/static/css/stTip.css" type="text/css" />');

$.each(json['data']['structure']['steps'], function(index, element) {
console.log("index", element['action']['contents']); 

$(function() { 
    $('.gb_g').tooltip({  
       items: 'a.gb_g',  
       content: '<div  class="sttip"><div class="tooltip in"><div class="tooltip-arrow"></div><div class="tooltip-arrow second-arrow"></div><div class="popover-inner"><p>Click <strong>Images</strong> to go to images section</p></div></div></div>',
//        element['action']['contents']['#content'][1],  
       show: "slideDown", 
       open: function(event, ui)  
       {  
          ui.tooltip.hover(  
          function () {  
             $(this).fadeTo("slow", 0.5);  
          });  
       }  
    }).addClass('showPrevBt');  
 });
  });
  });
