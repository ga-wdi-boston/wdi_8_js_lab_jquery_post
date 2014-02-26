window.onload = function() {
  var Read = {};

      $(document).ready(function(){

        // Retrieve all the articles
        $.get( "http://localhost:3000", function( data ) {
          Read.articles = data.articles,
          Read.articlesHTML = '';

          event.preventDefault();

          // Build the HTML for each Article
          for(var i = 0; i < articles.length; i++){
            Read.articlesHTML += '<li id=article_' + articles[i].id + '>' + articles[i].title;
            Read.articlesHTML += '<div>' + articles[i].body + '</div>';
            Read.articlesHTML += '</li>';
          };

          // Fill in the Article list
          $('#articles').append(articlesHTML);

        }); // end get xhr

      // set the handler for creating a new article
      $('#new-article').submit(function(event){

         // New article form
         var $form = $(event.target),
         $title = $form.find("input[name='title']"),
         $body = $form.find("input[name='body']"),
         // Get the form action
         Read.action = $form.attr('action');

         event.preventDefault();

        // Create and send a POST request
        $.ajax({
            type: "POST",
            url: 'http://localhost:3000/articles',
            data: {article:  {title: $title.val(), body: $body.val()}},
            dataType: 'json',
            success: function(response){
              var Read.article = response.article,
                Read.articleHTML = '<li id=article_' + article.id + '>';
                Read.articleHTML += article.title;
                Read.articleHTML += '<div>' + article.body + '</div>';
                Read.articleHTML += '</li>';

              // Add the article to the article list
              $('#articles').append(articleHTML);
            } // success function
          }); // end ajax
        }); // end handler

      }); // end ready
