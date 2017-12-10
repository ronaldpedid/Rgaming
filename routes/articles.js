const express = require('express');
const router = express.Router();
const Article = require('../lib/models/Article.js');


//show newsletter index
router.get('/', function (req, res, next) {
    Article.find({}, function (err, article) {
        if (err) {
            console.log(err)
        } else {
            res.render('newsletter/index', {
                articles: article,
                test: "Hello Test"
            });
        }
    }).sort({createdAt:-1}).limit(5);
});
//show page to create a new article post
router.get('/create', function (req, res, next) {
    let article = new Article();
    res.render('newsletter/edit', {
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
        res.render('newsletter/article',
            {article: article}
        );
    });
});


//Form post to create a new article
router.post('/', function (req, res, next) {
    Article.create(req.body, function (err, article) {
        res.redirect('/newsletter/create');
    });
});

//show page to edit the article
router.get('/:id/edit', function (req, res, next) {
    Article.findById(req.params.id, function (err, article) {
        if (err) {
            throw err
        }
        console.log(article);
        res.render('newsletter/edit', {
            action: '/newsletter/' + article.id + '?_method=PUT',
            article: article,
            deleteAction: '/newsletter/' + article.id + '?_method=DELETE'
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
            res.redirect('/newsletter/' + article.id)
        });
});

// "Delete the record"
router.delete("/:id", function(req, res) {
    Article.findByIdAndRemove(req.params.id, function(err, article) {
        Comment.remove({
            _id: {
                $in: article.comments
            }
        }, function(err, comments) {
            req.flash('error', article.title + ' deleted!');
            res.redirect('/newsletter');
        })
    });
});


module.exports = router;