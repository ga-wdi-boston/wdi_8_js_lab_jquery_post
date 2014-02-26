var APP = APP || {};

APP.Article = function(id, title, body) {
  this.id = id;
  this.title = title;
  this.body = body;
};

APP.Article.prototype.createHTML = function(){
  var articleHTML = '<li id=article_' + this.id + '>';
  articleHTML += this.title
  articleHTML += '<div>' + this.body + '</div>';
  articleHTML += '</li>';
  return articleHTML;
};

