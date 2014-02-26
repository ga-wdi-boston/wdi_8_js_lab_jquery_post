var AjaxHw = AjaxHw || {};

AjaxHw.Article = function(id, title, body){
  this.id = id;
  this.title = title;
  this.body = body;
}

AjaxHw.Article.prototype.showContent = function(){
  var articleHTML = '<li id=article_' + this.id + '>';
  articleHTML += this.title;
  articleHTML += '<div>' + this.body + '</div>';
  articleHTML += '</li>';
  return articleHTML;
}