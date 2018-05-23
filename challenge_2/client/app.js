
var url = 'http://localhost:3000/';

(function($) {
  function processForm ( e ) {
   var request = $.ajax({
      url: url,
      data: data,
      type: 'post',
      dataType : 'json',
      success: function(response) {
        data = $('csv').response; 
      }
    });

    e.preventDefault();
  }
  $("#form").submit(function() {
    var data = $('#txt').val();
    processForm();
  });
})(jQuery);

console.log("JQuery Logged")
