var AJAX = {};
$(document).ready(function(){
  // Get articles
  $.ajax({
    url: 'http://localhost:3000',
    type: 'GET',
    dataType: 'json'
  })
  .done(function(data) {
    event.preventDefault();
    AJAX.render_articles(data);
  });

  // Retrieve all the articles
  // And update the article list in the DOM.
  AJAX.render_articles = function(articles) {
    var articles = articles.articles,
      i = 0,
      l = articles.length,
      article;

    for(;i < l; i++) {
      article = articles[i];
      AJAX.render_article(article);
    };
  };

  AJAX.render_article = function(article) {
    event.preventDefault();
    var container = $('#articles'),
      new_article = $('<div class="article" id="article_' + article.id + '">');

    if (article.title === 'Carl') {
      new_article.addClass('carl');
    }
    new_article.append($('<h2 class="title">' + article.title + '</h2>'));
    new_article.append($('<p class="body">' + article.body + '</p>'));
    container.prepend(new_article);
  };
});
