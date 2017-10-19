const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let links = ["http://google.com"];

  res.render('index', {
      title: 'Ren Gaming',
      color: 'Red',
      data: links[0]});
});

module.exports = router;
