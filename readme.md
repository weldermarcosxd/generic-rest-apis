## This project was forked from generic-rest-api from luizguilhermesj

I've loved this project and made just a litle change in the way that the relations are managed in queries removing those _id from them. Otherwise visit https://www.npmjs.com/package/generic-rest-api for main suport.

# generic-rest-apis
Express JS generic REST API based on your sequelize models

The goal is to make something that we can use to build APIs really fast, instead of using a full framework like [sailsjs](http://sailsjs.com/) or [loopback](http://loopback.io/)


#### Requirements

* expressjs
* sequelize

#### Getting Started

First you add generic-rest-api to your project:

```shell
npm install --save generic-rest-api
```

Then you add it as a middleware to your express app, informing the path where your sequelize models are:

```javascript
var genericRestApi = require('generic-rest-api');
...
app.use(genericRestApi(__dirname+'/models'));
```

Let's assume you have just one model named `user`. The first example will add your application the following routes:

GET /user  
GET /user/:id  
GET /user/:id/:relation  
POST /user  
PUT /user/:id  
DELETE /user/:id  

If you want to add a prefix to your API you just need to declare it in express use:

```javascript
app.use('/api/v2', genericRestApi(__dirname+'/models'));
```

This way your API will be:  

GET /api/v2/user  
[...]  

You can also add some middlewares to all generic rest routes using an options argument:

```javascript
var options = {
    middlewares: [
        authentication
    ]
};
app.use(genericRestApi(__dirname+'/models', options));
```

#### Authentication

There is no authentication in this module.  
I know I'm forcing your hand here, but you can use a middleware for authentication and hooks on models for authorization.


#### Obs

If you want to override any method, you just need to add your own custom route BEFORE the middleware.  

#### Issues

If you find any kind of issue, please make this world more beautiful and **report** this [**issue**](https://github.com/luizguilhermesj/generic-rest-api/issues) so I can correct it.  
And, of course, if you want you can always make a [**pull request**](https://github.com/luizguilhermesj/generic-rest-api/pulls).  

#### Next Steps

* support Restify
* support other ORMs 
