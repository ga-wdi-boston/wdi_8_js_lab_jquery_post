var AjaxArticles = AjaxArticles || {};

AjaxArticles.Article = function(id, title, body) {
  this.id = id;
  this.title = title;
  this.body = body;
}

AjaxArticles.Article.prototype.showView = function(){
  var articleHTML = '<li id=article_' + this.id + '>';
      articleHTML += 'Title: ' + this.title;
      articleHTML += '<div>' + 'Body: ' + this.body + '</div>';
      articleHTML += '</li>';
      return articleHTML
}

