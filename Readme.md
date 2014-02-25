# Ajax Post
## Startup the Rails JSON Articles Service.
 Make sure you have the Articles API running on port 3000.

1.  ``git clone git@github.com:ga-wdi-boston/wdi_6_rails_lab_api.git``

2.  ``cd wdi_6_rails_lab_api``  
  
  
3.  This will seed your DB with Lorem Ipsum data.  
	``rake db:reset ``

4. In Chrome go to http://localhost:3000 and make sure you
  get back a JSON representation of all the articles.

## Create a page that will show all the articles.
1. Fork and clone this repo. 
	``https://github.com/ga-wdi-boston/wdi_8_js_lab_jquery_post``

2. Modify index.html to retrieve all the articles from the Articles service
and show them.  
2.1 Run a HTTP server on port 5000.  
  ``ruby -run -e httpd . -p5000``  
2.2  Go to  
  ``http://localhost:5000/simple_post.html``

3. **Instructor Led:** Use a global Ajax handler to indicate that the Ajax request is in progress.

#### Example:  

simple_get.html is single page app that gets all articles from the Articles service.

  ``open simple_get.html``

OR  
  ``ruby -run -e httpd . -p5000``  
  Go to localhost:5000/simple_get.html

#### Example (EJS):
simple.get_ejs.html will also get all articles from the Articles service. 
	__But it uses EJS, ERB like, template library to build the list__. 

* To use the EJS file you MUST start Chrome with disabled web security.
* So Chrome will allow you to load the EJS file from the file system.

  ``open -a "/Applications/Google Chrome.app" --args --disable-web-security``
  ``open simple_get_ejs.html``



## Create Artices using Ajax POST.

1. **Instructor Led:** Modify index.html to create articles and show them in the list of articles.

#### Example:
simple_post.html will show a form where you can create individual articles.

  ``$ open simple_post.html``

OR  
  ``ruby -run -e httpd . -p5000``  
  Go to localhost:5000/simple_post.html

## Refactor 
1. Refactor the Ajax GET to use Javascript namespaces, classes, bind, etc.
2. Refactor Ajax Post to use Javascript classes, bind, etc.

#### Example (Ajax GET Refactored):

  ``open adv_get.html``
  
  OR  
  ``ruby -run -e httpd . -p5000``  
  Go to localhost:5000/adv_get.html


#### Example (Ajax POST Refactored):

  ``open manage_articles.html``

  OR  
  ``ruby -run -e httpd . -p5000``  
  Go to localhost:5000/manage_articles.html
