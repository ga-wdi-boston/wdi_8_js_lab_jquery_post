$(document).ready(function(){

	EBlog.ArticleList.init("http://localhost:3000/");

	$('#new-article').submit(function(event){

		var $form = $(event.target),
		     $title = $('#new-title'),
		     $body = $('#new-body'),
		     url = $form.attr('action');

    event.preventDefault();

		$.ajax({
			url: url,
			type: 'POST',
			dataType: 'json',
			data: {article: {title: $title.val(), body: $body.val()}},

			success: function(response){
				var article, new_li;
				article = new Eblog.Article(response.article.id, response.article.title, response.article.body);
				new_li = article.render
				$('#articles').append(new_li);

				$title.val('');
				$body.val('');

			}
		});

	});

});



