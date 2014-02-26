var Demo = Demo || {};
Demo.ArticleList = {}

// called @ index.html, passing in localhost:3000 as getURL
// 'this' is the list
Demo.ArticleList.init = function(getUrl){
  this.url = getUrl;
  // click this once during onload, after which...
  $('#get-articles').click(this.getArticles.bind(this));
  // ...the button will 'trigger' at subsequent times without clicking - load 'automatically'
  $('#get-articles').trigger('click');
  $('#new-article').submit(this.postNewArticle.bind(this));
};

Demo.ArticleList.getArticles = function(event){
  // setting the all the 'li' elements created by the article prototype class
  //as a string, to be appended
  var articles_li = '';
  // get request via Ajax (same as lab but passing in this.url instead from the .init function)
  $.get(this.url, function( data ) {
    // getting the articles elements of all the articles from the JSON format of data
    var articles = data.articles;
      // looping through all articles, same as in lab
     for(var i = 0; i < articles.length; i++){
      // using the new article class, initialize a new article for each loop result
       article = new Demo.Article(articles[i].id, articles[i].title, articles[i].body);
       // render the all the 'li' elements with the .render function in the article prototype class
       articles_li += article.render();
     };
    // empty and then re-add all the 'li' elements to the 'ul'
    $('#articles').empty();
    $('#articles').append(articles_li);
  }.bind(this)); // not sure why we need to bind here?
};

Demo.ArticleList.postNewArticle = function(event){
  // New article form and Ajax post request, same as lab until line 51
  // the submit button is the event, the form is the event.target
 var $form = $(event.target),
  $title = $form.find('input[name="title"]'),
  $body = $form.find('input[name="body"]'),
  articles_url = $form.attr('action');
  event.preventDefault();
  // post request via ajax
  $.ajax({
    type: 'POST',
    url: this.url, // not sure why we don't need /articles here?
    data: {article:  {title: $title.val(), body: $body.val()}},
    dataType: 'json',
    success: function(response){
      // make a new article from input using the article class
      var article = new Demo.Article(response.article.id, response.article.title, response.article.body);
      // same as line 32 (add the new 'li' elements to the 'ul')
      $('#articles').append(article.render());
    }
  });
}
