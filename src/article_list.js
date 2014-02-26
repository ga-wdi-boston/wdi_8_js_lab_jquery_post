var Demo = Demo || {};
Demo.ArticleList = {}

// called @ index.html, passing in localhost:3000 as getURL
// 'this' is the list
Demo.ArticleList.init = function(getUrl){
  this.url = getUrl,
  // click this once during onload, after which...
  $('#get-articles').click(this.getArticles(this));
  // ...the button will 'trigger' at subsequent times
  $('#get-articles').trigger('click');
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
    // add all the 'li' elements to the 'ul'(Article list)
    $('#articles').append(articles_li);
  });
}
