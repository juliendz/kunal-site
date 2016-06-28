$(document).ready(function(){
  $('#submit_search').click(function(){
    window.open('report.html', '_blank');
    return false;
  });
$('#submit_login').click(function(){
     $( "#dialog-alert" ).dialog({position: {my: "center bottom-400"}});
    return false;
  });

});
