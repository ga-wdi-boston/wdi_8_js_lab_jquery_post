var App = {};

App.addSpinner = function(){
  $('#ajaxSpinnerContainer').css('display', 'block');
};
App.removeSpinner = function(){
  $('#ajaxSpinnerContainer').css('display', 'none')
};
App.processForm = function(event){
  event.preventDefault();
  var title = $('#title').val(),
    body = $('#body').val(),
    article = new App.Article(title, body);
  article.save();
  $('#title').val('');
  $('#body').val('');
};


App.init = function(){
  $('#load').on('click', App.ArticleList.load);
  $('form').submit(App.processForm);
};


// Article List

App.ArticleList = {
  load: function() {
    console.log('triggered!')
    $.ajax({
      url: 'http://localhost:3000/',
      beforeSend: function(){ App.addSpinner(); },
      complete: function(){ App.removeSpinner(); },
      success: function(response){
        console.log(response);
        App.ArticleList.render(response.articles);
      }
    });
  },
  render: function(articles){
    var i = 0, length = articles.length;
    $('#count').html(length);

    $('#articles').empty();
    for (; i < length; ) {
      $('#articles').append($('<li>').
        append('<h2>' + articles[i].title + '</h2>').
        append('<p>' + articles[i].body + '</p>'));
      i = i + 1;
    }
  }
};


