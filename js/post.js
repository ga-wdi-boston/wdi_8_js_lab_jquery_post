var Adv = Adv || {};


Adv.get = function(data) {
    var articles = data.articles,
    articlesHTML = '';

    event.preventDefault();

    // Build the HTML for each Article
    for(var i = 0; i < articles.length; i++){
      articlesHTML += '<li id=article_' + articles[i].id + '>' + articles[i].title;
      articlesHTML += '<div>' + articles[i].body + '</div>';
      articlesHTML += '</li>';
    };
    // Fill in the Article list
    $('#articles').append(articlesHTML);
};

Adv.submit = function(event){
   // New article form
   var $form = $(event.target),
   $title = $form.find("input[name='title']"),
   $body = $form.find("input[name='body']"),
   // Get the form action
   action = $form.attr('action');
   event.preventDefault();

   $.ajax({
    type: "POST",
    url: 'http://localhost:3000/articles', 
    data: {article:  {title: $title.val(), body: $body.val()}},
    dataType: 'json',
    success: function(response){
      var article = response.article,
        articleHTML = '<li id=article_' + article.id + '>';
        articleHTML += article.title;
        articleHTML += '<div>' + article.body + '</div>';
        articleHTML += '</li>';

      // Add the article to the article list
      $('#articles').append(articleHTML);
    } // success function
  });
};

$(document).ready(function(){
  // Retrieve all the articles
  $.get( "http://localhost:3000", Adv.get);
  // set the handler for creating a new article
  $('#new-article').submit(Adv.submit);
});
