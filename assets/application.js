$(document).ready(function(){
  $('#submit_search').click(function(){
     $( "#dialog-report" ).dialog({
       width:600,
       height:700
     });
    return false;
  });
$('#submit_login').click(function(){
     $( "#dialog-alert" ).dialog();
    return false;
  });

});
