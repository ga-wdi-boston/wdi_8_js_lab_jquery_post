var EBlog = EBlog || {};

EBlog.ArticleList = {};

EBlog.ArticleList.init = function(url){
	this.url = url
	this.getAll();
};

EBlog.ArticleList.getAll = function(){
	$.ajax({
		url: this.url,
		type: 'GET',
		dataType: 'json',
	})
	.done(function(data) {
		console.log("success");
		EBlog.ArticleList.renderAll(data.articles);
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
}

EBlog.ArticleList.renderAll = function(array){
	var list, i, length;
	list = $('#articles');
	i = 0;
	length = array.length;

	for(; i < length;){
		var new_li = $('<li />')
		var new_h4 = $('<h4 />')
		new_h4.append(array[i].title)
		new_li.append(new_h4)
		new_li.append(array[i].body)
		list.append(new_li);
		i = i + 1;
	}
};