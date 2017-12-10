const express = require('express');
const router = express.Router();
const Article = require('../lib/models/Article.js');


/* GET home page. */
router.get('/', function (req, res, next) {
    Article.find({}, function (err, article) {
        if (err) {
            console.log('err');
            res.send('Sorry something went wrong. Please try again.')
        } else {
            res.render('index', {
                articles: article
            });
        }
    }).sort({createdAt:-1}).limit(5);
});
module.exports = router;
