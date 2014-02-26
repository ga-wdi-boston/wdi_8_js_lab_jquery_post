var ShowArticles = {

  ShowArticles.Article: function(id, title, body) {
      this.id = id;
      this.title = title;
      this.body = body;
   },

  ShowArticles.Article.prototype.add = function() {
      var articlesHTML = '<li id=article_' + this.id + '>';
        articlesHTML += this.title;
        articlesHTML += '<div>' + this.body + '</div>';
        articlesHTML += '</li>';

      return articlesHTML;
  }

};

// Geometry.Rectangle.prototype.perimeter = function() {
//   return this.length * 2 + this.width * 2;
//     console.log(rectangle_two.perimeter);
// };

// Geometry.Rectangle.prototype.area = function() {
//   return this.length * this.width;
//     console.log(rectangle_one.area);
// };