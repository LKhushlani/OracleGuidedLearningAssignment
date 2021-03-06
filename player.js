// initialized player.js
var script = document.createElement('script');
script.src = "https://code.jquery.com/jquery-3.4.1.min.js";
script.src = "https://code.jquery.com/ui/1.12.1/jquery-ui.js"
document.getElementsByTagName('head')[0].appendChild(script);
$.getJSON("https://guidedlearning.oracle.com/player/latest/api/scenario/get/v_IlPvRLRWObwLnV5sTOaw/5szm2kaj/?callback=?",function(json){
//   console.log(json['data']['structure']['steps']);


  $.each(json['data']['structure']['steps'], function(index, element) {
    console.log("index", element['action']['contents']); 
// $(document).ready

    $('#tophf').tooltip({
      content: 'Hii'
    });

  });
  });