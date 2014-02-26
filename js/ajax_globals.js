$(document).ready(function(){
  // Ajax Global Functions

  // fires at beginning of any ajax request in the whole app
  $(document).ajaxStart(function(){

    // the .show() function changes the css "display" property of the selected element (here, to "inline")
    $("#ajaxSpinnerImage").show();

  // fires at end of any ajax request in the whole app
  }).ajaxStop(function(){

      // changes the css "display" property back to its initial value (here, to "none")
      $("#ajaxSpinnerImage").hide();

  // fires if there is an error in any ajax request in the whole app
  }).ajaxError(function( event, request, settings ) {

    // appends the error to an existing div#msg but we don't have this div
    $( "#msg" ).append( "<li>Error requesting page " + settings.url + "</li>" );
  });

});
