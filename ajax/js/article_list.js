var AjaxDemo = AjaxDemo || {};

// Only need one Article List 
AjaxDemo.ArticleList = {}

// Initialize with the 
AjaxDemo.ArticleList.init = function(getUrl, articleListEl){
  this.url = getUrl,
  this.articleListEl = articleListEl;
  
  // Set the get articles handler
  $('#get-articles').click(this.getArticles.bind(this));

  // Trigger the click event
  $('#get-articles').trigger('click');

  // set the handler for creating a new article
  $('#new-article').submit(this.createArticle.bind(this));

};

// Handler for creating one article
AjaxDemo.ArticleList.createArticle = function(event){
  // New article form
  var $form = $(event.target),
  $title = $form.find("input[name='title']"),
  $body = $form.find("input[name='body']"),
  // Get the form action
  action = $form.attr('action'),
  // Make this available to the success function below
  articleListEl = this.articleListEl;

  event.preventDefault();
  // Create and send a POST request
  $.ajax({
    type: "POST",
    url: this.url + '/articles', 
    data: {article:  {title: $title.val(), body: $body.val()}},
    dataType: 'json',
    success: function(response){
      // Add the article to the article list
      var article = new AjaxDemo.Article(
        response.article.id, 
        response.article.title,
        response.article.body);

      articleListEl.append(article.showView());
    }
  });
};

AjaxDemo.ArticleList.getArticles = function(event){
  var articlesHTML = '';
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