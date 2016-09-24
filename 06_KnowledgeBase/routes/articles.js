var express = require('express');
var router = express.Router();

var Article = require('../models/article');

router.get('/', function(req, res, next) {
  Article.getArticles(function(err, articles){
      if(err){
          console.log(err);
      }

      res.json(articles);

  });
});

module.exports = router;
