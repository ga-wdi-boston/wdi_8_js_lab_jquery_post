var Demo = Demo || {};
// init a new article (same old, same old)
// 'this' is the article
Demo.Article = function(id, title, body){
  this.id = id;
  this.title = title;
  this.body = body;
}

Demo.Article.prototype.render = function(){
  // making the 'li' element for each article
  var article_li = '<li id=article_' + this.id + '>';
  article_li += this.title
  article_li += '<div>' + this.body + '</div>';
  article_li += '</li>';
  return article_li
}
