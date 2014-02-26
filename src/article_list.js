var AjaxDemo = AjaxDemo || {};

// Only need one Article List
AjaxDemo.ArticleList = {}

// Initialize with the
AjaxDemo.ArticleList.init = function(getUrl, articleListEl){
	this.url = getUrl;
	this.articleListEl = articleListEl;

	$('#get-articles').click(this.getArticles());
	$('#get-articles').trigger('click');

	$('#new-article').submit(this.createArticle);

};

AjaxDemo.ArticleList.getArticles = function(event) {
	$.ajax({
	  url: this.url,
	  type: 'GET',
	  dataType: 'json',
	})
	.done(function(data) {
	  var articles = data.articles;
	  articlesHTML = '';

	  // Build the HTML for each Article
	  for(var i = 0; i < articles.length; i++){
	    articlesHTML += '<li id=article_' + articles[i].id + '>' + articles[i].title;
	    articlesHTML += '<div>' + articles[i].body + '</div>';
	    articlesHTML += '</li>';
	  };
	  $('#articles').empty();
	  $('#articles').append(articlesHTML);
	})
	.fail(function() {
	  console.log("error");
	})
	.always(function() {
	  console.log("complete");
	});
};

AjaxDemo.ArticleList.createArticle = function(event) {
	var $form = $(event.target),
	    $title = $form.find('input[name="title"]'),
	    $body = $form.find('input[name="body"]'),
	    url = $form.attr('action');

	event.preventDefault();
	// Ajax post
	$.ajax({
	  url: url,
	  type: 'POST',
	  dataType: 'json',
	  data: {article: {title: $title.val(), body: $body.val()}},
	  success: function(response) {
	    var article = response.article,
	      articleHTML;


	    articleHTML = '<li id="article_' + article.id + '">';
	    articleHTML += article.title;
	    articleHTML += '<div>' + article.body + '</div>';
	    articleHTML += '</li>';

	    $('#articles').append(articleHTML);
	  }
	}); //end of ajax
};
