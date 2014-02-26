var AjaxHw = AjaxHw || {};

AjaxHw.ArticleList= {};


AjaxHw.ArticleList.init = function(getUrl, articleListEl){
  this.url = getUrl,
  this.articleListEl = articleListEl;

  $('#get-articles').click(this.getArticleAll.bind(this));

  // Trigger the click event to get the articles
  $('#get-articles').trigger('click');

  $('#new-article').submit(this.createArticle.bind(this));
};


AjaxHw.ArticleList.getArticleAll = function(event){
  var articlesHTML = '';
  $.get( this.url, function(data) {
    var articles = data.articles;
    debugger;
    for(var i = 0; i < articles.length; i++){
      article = new AjaxHw.Article(articles[i].id, articles[i].title, articles[i].body);
      articlesHTML += article.showContent();
    };

    this.articleListEl.empty();
    this.articleListEl.append(articlesHTML);
  }.bind(this));
}

AjaxHw.ArticleList.createArticle = function(event){
          // get the form
  var $form = $(event.target),
    // get the title input
      $title = $form.find("input[name='title']"),
      $body = $form.find("input[name='body']"),
      action = $form.attr('action'),
      articleListEl = this.articleListEl;
      event.preventDefault();

  // Ajax post
  $.ajax({
    type: "POST",
    url: this.url + '/articles',
    data: {article: {title: $title.val(), body: $body.val()}},
    dataType: 'json',
    success: function(response){
      event.preventDefault();
      var article = new AjaxHw.Article(
        response.article.id,
        response.article.title,
        response.article.body);
      articleListEl.append(article.showContent());
    }
  });
};