# Ajax Post 
### Objectives.
1. Show a Standalone Javascript Client.  
	This is a Single Page Application (SPA) that will use a JSON API to 	persist data.
2. Review Ajax Get.
3. Learn about JQuery Ajax global handlers.
4. Learn how to create resources using Ajax Post.
5. Use Javascript Debugging tools.
	* Chrome Inspector Panels
		* Network
			Watch and Understand HTTP Request/Replies.
		* Console
			Know how to log to console.
		* Source.  
			Use the Debugger.  
	* Use the curl commands to create HTTP Requests and view responses.
	* Install [JSON Prettifer](https://chrome.google.com/webstore/detail/json-prettifier/kccpfgilgmgbipamhohknpokhibinhhj) into Chrome.
		
	
## Startup the Rails JSON Articles API/Service.
 Make sure you have the Articles API running on port 3000.

1.  ``git clone git@github.com:ga-wdi-boston/wdi_6_rails_lab_api.git``

2.  ``cd wdi_6_rails_lab_api``


3.  This will seed your DB with Lorem Ipsum data.  
	``rake db:reset ``

4. In Chrome go to http://localhost:3000 and make sure you
  get back a JSON representation of all the articles.
  
Install [JSON Prettifer](https://chrome.google.com/webstore/detail/json-prettifier/kccpfgilgmgbipamhohknpokhibinhhj) into Chrome.

## Get the Finished SPA
__This repository will contain all the finished code that we are going to write in this lesson.__

__Refer to it if your stuck__

This Finished SPA will contain all the examples below.

Fork and clone this repo.
	``https://github.com/ga-wdi-boston/wdi_8_js_lab_jquery_post``

## Create a new SPA to view all the Articles

1. Create a new __Directory__, named _article_spa_ that will contain all the Client/Browser code (_javascript_, _css_ and _html_) for this SPA.  

	1.1 Change into this article_spa directory  
	``cd article_spa``  
	1.2 Make a js and css directory.  
	1.3 Copy jquery.js and simple.css from the original repo above into these directories.
	
2. Create and modify index.html a mimimal index.html. 
	It will only have head body sections. In the head add the 	jquery.js and simple.css.from the js directory.  
	
	Create a h3 with "Articles SPA" and an unordered list with an id='articles'  
	
3.  Run a HTTP server on port 5000. 
  ``ruby -run -e httpd . -p5000``  
  
  This will run the WEBrick server on port 5000. This is used ONLY to serve up 
  the html/css and javascript for this SPA.  
  
3. Update index.html to show all the Articles from the JSON API using Ajax GET.
	3.1 Goto http://localhost:5000 to see all your articles.

4. Use a global Ajax handler to indicate that the Ajax request is in progress.


5. Use the Chrome inspector to 
	* Step thru the code.
	* View the HTTP Requests and Replies.
6. Use curl create a HTTP GET request and analyize the HTTP Request and Response.

#### Example:

wdi_6_rails_lab_api/simple_get.html is single page app that gets all articles from the Articles service.  

  ``ruby -run -e httpd . -p5000``
  
  Go to localhost:5000/simple_get.html

### Lab
	* Break up in to teams of two.  
	* Find the jQuery documentation for global handlers and read it.
	* Use the Chrome inspector to validate you findings.
	* Discuss the functionality with your partner.
	* Enumerate typically use cases for Ajax global handlers.
	* Present what you've found to the class.


## Create Artices using Ajax POST.
1. Modify index.html so that it can create a new article.

#### Example:
simple_post.html will show a form where you can create individual articles.

  ``ruby -run -e httpd . -p5000``
  Go to localhost:5000/simple_post.html

### Lab
   * Split the class in two and draw a conceptual model of the interactions between the clien SPA and the JSON API. Whiteboard the these mental models.
   * Present this model.
   
## Refactor
1. Refactor the Ajax GET to use Javascript namespaces, classes, bind, etc.
2. Refactor Ajax Post to use Javascript classes, bind, etc.

#### Example (Ajax GET Refactored):

  ``ruby -run -e httpd . -p5000``
  Go to localhost:5000/adv_get.html


#### Example (Ajax POST Refactored):
  ``ruby -run -e httpd . -p5000``
  Go to localhost:5000/manage_articles.html
  
# Handlebars
We are going to use the [handlebarsjs](http://handlebarsjs.com/) library to generate html.
### Examples:
* handlebars.html will implement a very simple handlebar template.  
* handlebars_ajax.html will make a Ajax request for _one_ article and render it.
* handlebars_ajax_all.html will make a Ajax request for _all_ of the articles and generate html.


### Lab
Integrate handlebars into refactored javascript, manage_articles.html


  

