$(document).ready(function(){

  // Retrieve all the articles
  $.get( "http://localhost:3000", function( data ) {
    var articles = data.articles,
    articlesHTML = '';

    // Build the HTML for each Article
    for(var i = 0; i < articles.length; i++){
      articlesHTML += '<li id=article_' + articles[i].id + '>' + articles[i].title;
      articlesHTML += '<div>' + articles[i].body + '</div>';
      articlesHTML += '</li>';
    };

    // Fill in the Article list
    $('#articles').append(articlesHTML);

  }); // end get xhr

}); // end ready
