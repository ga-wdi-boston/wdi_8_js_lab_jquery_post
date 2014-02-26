var Carl = {};

Carl.renderArticles = function() {
  $.ajax({
    url: Carl.CarlRL,
    type: 'GET',
    dataType: 'json',
  })
  .done(function(data) {
    var allArticles = data.articles;
    $.each(allArticles, function(index, article) {
      Carl.renderArticle(article);
    });
  })
  .fail(function() {
    console.log("error");
  })
  .always(function() {
    console.log("complete");
  });
}

Carl.renderArticle = function(article) {
  var $articleUl   = $("#articles"),
      $articleNode = $("<div/>");

  $articleNode.append($("<h3>" + article.title + "</h3>"));
  $articleNode.append($("<p>" + article.body + "</p>"));
  $("<li/>").append($articleNode).appendTo($articleUl);
  return true;
}

Carl.newArticle = function(event) {
  var $newTitle = $(this).find("input[name='title']"),
      $newBody  = $(this).find("input[name='body']"),
      action    = $(this).attr("action"), // this is the form in this scope
      method    = $(this).attr("method");

  event.preventDefault();

  $.ajax({
    url: action,
    type: method,
    data: {article: {
      title: $newTitle.val(),
      body:  $newBody.val()
      }
    },
    dataType: "json",
  })
  .done(function(data) {
    $newTitle.val("");
    $newBody.val("");
    Carl.renderArticle(data.article);
  });
}

Carl.CarlRL = "http://localhost:3000";
