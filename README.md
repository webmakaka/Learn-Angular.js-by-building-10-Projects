# [Eduonix] Projects in AngularJS - Learn Angular.js by building 10 Projects [ENG, 2015]

<br/>



I'm working on Ubuntu in docker container with debian jessie:

    $ lsb_release -a
    Description:	Ubuntu 14.04.5 LTS
    Codename:	trusty

<br/>

    $ docker -v
    Docker version 1.9.1, build a34a1d5


<a href="http://jsdev.org/env/docker/run-container/">How to run docker container for start development</a>
(If link will not work give me to know about it)

<br/>

    $ node -v
    v4.5.0

<br/>

    # npm -v
    2.15.9


<br/>

### 01 Basic Angular Website

003 Creating the HTML CSS

http://getbootstrap.com/examples/justified-nav/

004 Plunkr Setup  Main Controller - Basic Architecture

http://plnkr.co/

005 Plunkr Setup  Main Controller - Implementation

006 Fetching Data with http - Basic Design

007 Fetching Data with http - Implementation

![Application](/img/01.png?raw=true)


<br/>

### 02 Web Template Store

Technologies: Angular Seed

009 Angular Seed Setup

https://github.com/angular/angular-seed.git

    $ git clone --depth=1 https://github.com/angular/angular-seed.git .
    $ npm install
    $ bower install

    package.json

    i replace
    "start": "http-server -a localhost -p 8000 -c-1",

    on

    "start": "http-server -p 8080 -c-1",


    $ npm start


http://localhost:8080/app/


010 Creating Views - Basic Design

    $ bower install --save bootstrap

http://getbootstrap.com/examples/starter-template/

011 Creating Views - Implementation

012 Get Display Templates

013 Get Display Templates - Final Steps


![Application](/img/02-1.png?raw=true)

![Application](/img/02-2.png?raw=true)


<br/>

### 03 myContacts App

Technologies: Angular Seed, FireBase, Foundation

015 Angular Seed  Firebase Setup

https://www.firebase.com/

App Name: mycontacts  
App URL: mycontacts-app-1

    $ cd 04_myContacts_App
    $ git clone --depth=1 https://github.com/angular/angular-seed.git .
    $ npm install
    $ bower install

    $ npm install --save-dev firebase
    $ npm start

<br/>

    package.json

    i replace
    "start": "http-server -a localhost -p 8000 -c-1",

    on

    "start": "http-server -p 8080 -c-1",


http://localhost:8080/app/

    $ bower install --save foundation
    $ bower install --save angularfire

https://www.firebase.com/docs/web/libraries/angular/

    $ npm start

http://localhost:8080/app/#/contacts


016 Read Create Contacts - Basic Design

http://localhost:8080/app/#/contacts

017 Read Create Contacts - Final Steps

http://localhost:8080/app/#/contacts

018 Edit Display Single Contact - Design

http://localhost:8080/app/#/contacts

019 Edit Display Single Contact - Implementation

http://localhost:8080/app/#/contacts


![Application](/img/03-1.png?raw=true)

![Application](/img/03-2.png?raw=true)


<br/>

### 04 ngSocial Facebook App

I don't want to programming anything with social networks

May be later



<br/>

### 05 Job Directory

<strong>Technologies</strong>: MEAN Stack

http://meanjs.org/


<br/>

02 Implementing the MEAN Stack

<br/>

    # apt-get install -y mongodb
    # mkdir -p /data/db
    # mongod


<br/>

    # npm install -g bower
    # npm install -g grunt-cli

<br/>

    $ cd 05_Job_Directory
    $ git clone --depth=1 https://github.com/meanjs/mean .

    $ npm install

    $ grunt

http://localhost:3000


<br/>

03 Backend Job API Setup

http://localhost:3000/articles  
http://localhost:3000/jobs  

Not works !!!

I don't know how to create a new article

![Application](/img/05-1.png?raw=true)

![Application](/img/05-2.png?raw=true)

project is not ended

<br/>

### 06 KnowledgeBase

<strong>Technologies</strong>: Express, MongoDB

<br/>

02 NodeJS MongoDB Setup

    # npm install -g nodemon
    # npm install -g express-generator
    # npm install -g express-generator

    $ cd 06_KnowledgeBase
    $ express .
    $ npm install --save mongodb
    $ npm install --save mongoose

    $ npm install


    # mongo
    > use knowledgebase
    > db.createCollection('articles');
    > db.createCollection('categories');

    > db.categories.insert({name:"Technology"});
    > db.categories.insert({name:"Education"});
    > db.categories.insert({name:"Healthcare"});
    > db.categories.find();

    > db.articles.insert({title:"Article One", category: "Technology", body: "This is the body", date: new Date()});
    > db.articles.insert({title:"Article Two", category: "Education", body: "This is the body", date: new Date()});
    > db.articles.insert({title:"Article Three", category: "Education", body: "This is the body", date: new Date()});

    > db.articles.find();


<br/>

    $ nodemon start

http://localhost:3000/


<br/>

03 Backend GET Routes - Design

http://localhost:3000/articles/

![Application](/img/06-1.png?raw=true)

<br/>

04 Backend GET Routes - Implementation

http://localhost:3000/articles/57e6782cc08c6bee3d047805/  
http://localhost:3000/articles/category/Technology/  

<br/>

http://www.lipsum.com/feed/html

<br/>

    # mongo

    > use knowledgebase
    > db.categories.update({name:"Technology"}, {$set:{description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis eu sem pellentesque rutrum. Nulla nec porttitor velit, in venenatis ante. Donec eget fringilla dolor."}});

    > db.categories.update({name:"Healthcare"}, {$set:{description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis eu sem pellentesque rutrum. Nulla nec porttitor velit, in venenatis ante. Donec eget fringilla dolor."}});

    > db.categories.update({name:"Education"}, {$set:{description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis eu sem pellentesque rutrum. Nulla nec porttitor velit, in venenatis ante. Donec eget fringilla dolor."}});


    > db.categories.find().pretty();

<br/>

http://localhost:3000/categories/  
http://localhost:3000/categories/57e67735c08c6bee3d047803


<br/>

05 Backend POST Routes

not tested

<br/>

06 Angular Routes Views

    $ cd public/
    $ bower init
    $ bower install --save angular
    $ bower install --save angular-route
    $ bower install --save bootstrap


http://getbootstrap.com/examples/starter-template/


<br/>

07 Angular Routes  Views - Final Steps

http://localhost:3000/#/articles  
http://localhost:3000/#/articles/add  
http://localhost:3000/#/articles/edit/1  
http://localhost:3000/#/articles/details/1


<br/>

08 Frontend Data Display - Basic Design

http://localhost:3000/#/categories  
http://localhost:3000/#/articles/category/Technology  

<br/>

09 Frontend Data Display - Final views

http://localhost:3000/#/articles  
http://localhost:3000/#/articles/details/57e6782cc08c6bee3d047805

<br/>

10 Add, Edit  Delete Articles - Initial Steps

<br/>

11 Add, Edit  Delete Articles - Final Points


![Application](/img/06-2.png?raw=true)

![Application](/img/06-3.png?raw=true)

![Application](/img/06-4.png?raw=true)

![Application](/img/06-5.png?raw=true)

<br/>

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>
