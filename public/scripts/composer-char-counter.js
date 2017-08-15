// load js after page loads
$(document).ready(function() {
  const CHAR_LIMIT = 140
  $('textarea').on('keyup',function(){
    var newcounter = CHAR_LIMIT - $(this).val().length;
    $(".counter").html(newcounter);

    //to change color of character length displayed
    if (newcounter < 0){
      $(".counter").addClass('error');
    } else {
     $(".counter").removeClass('error')
   }
 });
});
