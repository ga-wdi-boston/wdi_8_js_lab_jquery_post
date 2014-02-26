$(document).ready(function(){


  // retrieve all the articles from localhost (rails server running the rails api lab with articles being database seeds)
  // here, the returned "data" will be a JSON object (a hash with key: "articles" and value: array of all articles)
  $.get( "http://localhost:3000", function(data) {

    // data is a JSON object (a hash with key: "articles" and value: array of all articles)
    var articles = data.articles,
        articlesHTML = '';

    event.preventDefault();

    // build the HTML for each article in the array
    for(var i = 0; i < articles.length; i++){
      articlesHTML += '<li id=article_' + articles[i].id + '>' + articles[i].title;
      articlesHTML += '<div>' + articles[i].body + '</div>';
      articlesHTML += '</li>';
    };

    $('#articles').append(articlesHTML);

  }); // end $.get request



// submit new article
// when the form#new-article is submitted, this is what happens
$('#new-article').submit(function(event){

  // $form is the event target because the id #new-article is what triggered this method, and it points to a form
  var $form = $(event.target),
      $title = $form.find("input[name='title']"),
      $body = $form.find("input[name='body']"),
      action = $form.attr('action');

  // prevent default action of submit button, which is to display the results at localhost:3000
  event.preventDefault();

  // create and send a POST request with submitted article data
  $.ajax({
      type: "POST",
      url: "http://localhost:3000/articles",
      // since $title and $body are HTML elements, use .val() to get the contents
      data: {article:  {title: $title.val(), body: $body.val()}},
      dataType: 'json',

      success: function(response){
        var article = response.article,
          articleHTML = '<li id=article_' + article.id + '>';
          articleHTML += article.title;
          articleHTML += '<div>' + article.body + '</div>';
          articleHTML += '</li>';

        $('#articles').append(articleHTML);

      } // end success function

    }); // end post request

  }); // end new article submit

}); // end ready
