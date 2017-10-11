var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var links = ["http://google.com"];

  res.render('index', {
      title: 'Ren Gaming',
      color: 'Red',
      data: links[0]});
});

module.exports = router;
