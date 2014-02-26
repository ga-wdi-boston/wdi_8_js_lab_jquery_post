var AjaxDemo = AjaxDemo || {};

AjaxDemo.Article = function(id, title, body){
  this.id = id;
  this.title = title;
  this.body = body;
}

AjaxDemo.Article.prototype.showView = function(){
  var articleHTML = '<li id=article_' + this.id + '>';
  articleHTML += this.title
  articleHTML += '<div>' + this.body + '</div>';
  articleHTML += '</li>';
  return articleHTML
}
