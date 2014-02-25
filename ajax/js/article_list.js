var AjaxDemo = AjaxDemo || {};

AjaxDemo.ArticleList = {}

AjaxDemo.ArticleList.init = function(url, articleListEl){
  this.url = url,
  this.articleListEl = articleListEl;
  // set the get articles handler
  $('#get-articles').click(this.getArticles.bind(this));

};

AjaxDemo.ArticleList.getArticles = function(event){
  var articlesHTML = '';
  ;
   // Retrieve all the articles

  $.get(this.url, function( data ) {
    var articles = data.articles;

     // Build the HTML for each Article
     for(var i = 0; i < articles.length; i++){
       article = new AjaxDemo.Article(articles[i].id, articles[i].title, articles[i].body);
       articlesHTML += article.showView();
     };

    // Fill in the Article list
    this.articleListEl.append(articlesHTML);
  }.bind(this)); // end get xhr
}