var data = {'bob':'foo','paul':'dog'};
var url = 'http://localhost:3000/';

(function($) {
  function processForm ( e ) {
   var request = $.ajax({
      url: url,
      data: data,
      type: 'post',
      dataType : 'json',

    });

    e.preventDefault();
  }
  $("form").submit(processForm);
})(jQuery);

console.log("JQuery Logged")
