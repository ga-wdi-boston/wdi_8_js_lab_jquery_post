# Ajax Post
* Make sure you have the Articles API running on port 3000.
  ``git clone git@github.com:ga-wdi-boston/wdi_6_rails_lab_api.git``

  ``cd wdi_6_rails_lab_api``  
  
  This will seed your DB with Lorem Ipsum data.  
  ``rake db:reset ``

  * In Chrome go to http://localhost:3000 and make sure you
  get back a JSON representation of all the articles.

* Simple AJAX GET.  
 	All in one page that only gets all articles from a
  JSON API running on http://localhost:3000

  ``open simple_get.html``

* Same as above but uses the EJS, ERB like, template engine.
     * To use the EJS file you MUST start Chrome with disabled web security.
     * So Chrome will allow you to load the EJS file from the file system.

  ``open -a "/Applications/Google Chrome.app" --args --disable-web-security``
  ``open simple_get_ejs.html``

* Make a HTTP Ajax POST to create an article.  

  ``$ open simple_post.html``

* Refactored HTTP Ajax GET. This will use Javascript classes, bind, etc

  ``open adv_get.html``

* Refactored HTTP Ajax POST. This will use Javascript classes, bind, etc

  ``open manage_articles.html``
