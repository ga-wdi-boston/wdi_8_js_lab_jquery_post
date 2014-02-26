
      // the script is loaded right away, but fires only when the whole document is ready (i.e. completed loading)
      $(document).ready(function(){


        // retrieve all the articles from localhost (rails server running the rails api lab with articles being database seeds)
        // includes seed articles and previous manually-submitted articles


        // the "data" argument represents the returned data, and is required if you want to do anything with the results, like display them
        // similar to ruby block-level variable |data|
        // here, the returned "data" will be a JSON object (a hash with key: "articles" and value: array of all articles)
        // the argument can be an object with request parameters, e.g. function( { name: "John", time: "2pm" } )
        // but then you need to use the .done(function(data)) method in order to do anything with those results... or just use $.ajax instead
        $.get( "http://localhost:3000", function(data) {

          // data is a JSON object (a hash with key: "articles" and value: array of all articles)
          // extract array of articles from data and assign to variable "articles"
          var articles = data.articles,
              // define variable articlesHTML as an empty string (could just declare it without the empty string too)
              articlesHTML = '';

          // not sure what default is being prevented here, because no button was clicked... app works fine if this line is removed
          event.preventDefault();

          // build the HTML for each article in the array (each line adds some text to the string "articlesHTML")
          // for (index of each item; do loop while index is less than length of array; increment index each time loop executes)
          for(var i = 0; i < articles.length; i++){
            // create new li element with id same as JSON id of article and title attribute same as JSON title of article
            articlesHTML += '<li id=article_' + articles[i].id + '>' + articles[i].title;
            // create new div within li that contains text of each article (from JSON body of article)
            articlesHTML += '<div>' + articles[i].body + '</div>';
            // close li element
            articlesHTML += '</li>';
          };

          // select div#articles and insert articlesHTML as the last child
          $('#articles').append(articlesHTML);

        }); // end $.get request



      // submit new article



      // set the handler for creating a new article
      // when the form#new-article is submitted, this is what happens
      $('#new-article').submit(function(event){

        // $ just means the variable is a jquery object
        // $form is the event target because the id #new-article is what triggered this method, and it points to a form
        var $form = $(event.target),
            // within the form, find the specified element, and assign it to $title
            // $title is an HTML element - use $title.val() for its contents
            $title = $form.find("input[name='title']"),
            // within the form, find the specified element, and assign it to $body
            // $body is an HTML element - use $body.val() for its contents
            $body = $form.find("input[name='body']"),
            // within the form, find the specified attribute, and assign it to action
            action = $form.attr('action');

        // prevent default action of submit button, which is to display the results at localhost:3000
        event.preventDefault();

        // create and send a POST request with submitted article data
        $.ajax({
            // request type
            type: "POST",
            // request url
            url: "http://localhost:3000/articles",
            // request parameters, which is an object formulated same as the returned article objects
            // since $title and $body are HTML elements, use .val() to get the contents
            data: {article:  {title: $title.val(), body: $body.val()}},
            // request parameters are a JSON object
            dataType: 'json',

            // only if request is successful, do this
            // response is the server response
            success: function(response){
              // build the HTML for the submitted article, same as before
              var article = response.article,
                articleHTML = '<li id=article_' + article.id + '>';
                articleHTML += article.title;
                articleHTML += '<div>' + article.body + '</div>';
                articleHTML += '</li>';

              // add the article to the article list, same as before
              $('#articles').append(articleHTML);

            } // end success function

          }); // end post request

        }); // end new article submit

      }); // end ready
