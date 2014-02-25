var AJAX = AJAX || {};

$(document).ready(function() {
	// Create new article
	$('#new_article').submit(function(event) {
	  event.preventDefault();
	  var title = $('#article_title').val(),
	    body = $('#article_body').val(),
	    action = $('#new_article').attr('action');

	  $.ajax({
	    url: action,
	    type: 'POST',
	    dataType: 'json',
	    data: {article: {title: title, body: body}},
	    success: function(data) {
	      event.preventDefault();
	      AJAX.render_article(data.article);
	      $('.input').val("");
	    }
	  });
	});
});
