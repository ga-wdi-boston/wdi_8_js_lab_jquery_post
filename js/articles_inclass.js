var AjaxDemoJanice = AjaxDemoJanice || {};


AjaxDemoJanice.Article = function(id, title, body){
  this.id = id;
  this.title = title;
  this.body = body;
};

AjaxDemoJanice.Article.prototype.showView = function(){
	var articleHTML = '<li id=article_' + this.id + '>';
  articleHTML += '<div>' + ' TITLE: ' + this.title +' BODY:' + this.body + '</div>';
  articleHTML += '</li>';
  return articleHTML
};

/////////////////////////////////////////////////////////////////////
AjaxDemoJanice.ArticleList = {};

AjaxDemoJanice.ArticleList.listTheArticles = function(getUrl, articleListEl){
  this.url = getUrl,
  this.articleListEl = articleListEl;

  $('#articles').click(this.getArticles.bind(this));
  $('#articles').trigger('click');
  $('#new-article').submit(this.createArticle.bind(this));
};

AjaxDemoJanice.ArticleList.createArticle = function(event){
  var $form = $(event.target),
  $title = $form.find("input[name='title']"),
  $body = $form.find("input[name='body']"),
  action = $form.attr('action'),
  articleListEl = this.articleListEl;
  event.preventDefault();

  $.ajax({
    type: "POST",
    url: this.url + '/articles',
    data: {article:  {title: $title.val(), body: $body.val()}},
    dataType: 'json',
    success: function(response){
      var article = new AjaxDemoJanice.Article(
        response.article.id,
        response.article.title,
        response.article.body);
      articleListEl.append(article.showView());
    }
  });
};

AjaxDemoJanice.ArticleList.getArticles = function(event){
  var articlesHTML = '';
  $.get(this.url, function( data ) {
    var articles = data.articles;
    for(var i = 0; i < articles.length; i++){
      article = new AjaxDemoJanice.Article(articles[i].id, articles[i].title, articles[i].body);
      articlesHTML += article.showView();
    };
    this.articleListEl.empty();
    this.articleListEl.append(articlesHTML);
  }.bind(this));
};
