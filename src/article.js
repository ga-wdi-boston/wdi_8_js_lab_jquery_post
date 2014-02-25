App.Article = function(title, body) {
  this.title = title;
  this.body = body;
};


App.Article.prototype = {
  save: function(){
    $.ajax({
      url: 'http://localhost:3000/articles',
      method: 'post',
      data: {article: {title: this.title, body: this.body} },
      beforeSend: function(){ App.addSpinner(); },
      complete: function(){ App.removeSpinner(); },
      success: function(){
        App.ArticleList.load();
      },
      failure: function(){}
    });
  }
};
