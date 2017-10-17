const express = require('express');
const router = express.Router();
const Article = require('../lib/models/Article.js');


//show articles index
router.get('/', function (req, res, next) {
    Article.find({}, function(err, article){
       if(err){
           console.log(err)
       }else{
           res.render('articles/index', {
               articles: article,
               test: "Hello Test"
           });
       }
    });
});
//show page to create a new article post
router.get('/create', function (req, res, next) {
    let article = new Article();
    res.render('articles/edit', {
        articles: article,
        success: req.session.success,
        errors: req.session.errors
    });
    req.session.errors = null;
});

//show a specific article
router.get('/:id', function (req, res) {
    Article.findById(req.params.id, function (err, article) {
        if (err) {
            throw err;
        }
        res.render('articles/article',
            {article: article}
        );
    });
});


//Form post to create a new article
router.post('/', function (req, res, next) {
    Article.create(req.body, function (err, article) {
        res.redirect('/articles/create');
    });
});

//show page to edit the article
router.get('/:id/edit', function (req, res, next){
    Article.findById(req.params.id, function(err, article){
        if (err){
            throw err
        }
        console.log(article);
        res.render('articles/edit', {
            action: '/articles/' + article.id + '?_method=PUT',
            article: article,
            deleteAction: '/articles/' + article.id + '?_method=DELETE'
        });
    });
});

//update the server with changes
router.put('/:id', function (req, res) {
    console.log(req.body);
    Article.findOneAndUpdate({_id: req.params.id}, req.body,
        function (err, article) {
            if (err) {
                throw err;
            }
            res.redirect('/articles/' + article.id)
        });
});

// "Delete the record"
router.delete('/:id', function (req, res) {
    Article.findByIdAndRemove({_id: req.params.id}, function (err) {
        if (err) {
            throw err;
        }
        res.redirect('/articles/');
    });
});


module.exports = router;