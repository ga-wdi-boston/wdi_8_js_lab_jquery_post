var Eblog = {};

Eblog.Article = function(id, title, body){
	this.title = title;
	this.body = body;
	this.id = id;
};

Eblog.Article.prototype.render = function(){
	var new_li, new_h4;
	new_li = $('<li />')
	new_h4 = $('<h4 />')
	new_h4.append(this.title)
	new_li.append(new_h4)
	new_li.append(this.body)

	return new_li;
};