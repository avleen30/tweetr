// load js after page loads
 $(document).ready(function() {
  $('textarea').on('keyup',function(){
    var newcounter = 140 - $(this).val().length;
    $(".counter").html(newcounter);

    if (newcounter < 0){
      $(".counter").addClass('error');
      } else {
       $(".counter").removeClass('error')
      }
  });
});
