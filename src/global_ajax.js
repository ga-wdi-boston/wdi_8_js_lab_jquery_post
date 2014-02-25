$( document ).ajaxStart(function() {
	  $( "#ajaxSpinnerImage" ).show();
	}).ajaxSuccess(function() {
	  $( "#ajaxSpinnerImage" ).hide();
});
