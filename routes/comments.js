const express = require("express");
const router  = express.Router({mergeParams: true});
const Article = require('../lib/models/Article');
const Comment = require("../lib/models/Comment");
const middleware = require("../middleware");

//Comments New
router.get("/new", middleware.isLoggedIn, function(req, res){
    // find article by id
    console.log(req.params.id);
    Article.findById(req.params.id, function(err, article){
        if(err){
            console.log(err);
        } else {
            res.render("comments/new", {article: article});
        }
    })
});

//Comments Create
router.post("/",middleware.isLoggedIn,function(req, res){
    //lookup article using ID
    Article.findById(req.params.id, function(err, article){
        if(err){
            console.log(err);
            req.flash('error', 'Opps, something went wrong!');
            res.redirect("/newsletter");
        } else {
            Comment.create(req.body.comment, function(err, comment){
                if(err){
                    req.flash('error', 'Opps, something went wrong!');
                    res.redirect('back');
                    console.log(err);
                } else {
                    //add username and id to comment
                    comment.author.id = req.user._id;
                    comment.author.username = req.user.username;

                    //save comment
                    comment.save();
                    article.comments.push(comment);
                    article.save();
                    console.log(comment);
                    req.flash('success', 'Created a comment!');
                    res.redirect('/newsletter/' + article._id);
                }
            });
        }
    });
});

router.get("/:commentId/edit", middleware.isLoggedIn, function(req, res){
    // find article by id
    Comment.findById(req.params.commentId, function(err, comment){
        if(err){
            console.log(err);
        } else {
            res.render("comments/edit", {id: req.params.id, comment: comment});
        }
    })
});

router.put("/:commentId", function(req, res){
    Comment.findByIdAndUpdate(req.params.commentId, req.body.comment, function(err, comment){
        if(err){
            console.log(err);
            res.render("edit");
        } else {
            res.redirect("/newsletter/" + req.params.id);
        }
    });
});

router.delete("/:commentId",middleware.checkUserComment, function(req, res){
    Comment.findByIdAndRemove(req.params.commentId, function(err, comment){
        if(err){
            console.log(err);
        } else {
            Article.findByIdAndUpdate(req.params.id, {
                $pull: {
                    comments: comment.id
                }
            }, function(err) {
                if(err){
                    console.log(err)
                } else {
                    req.flash('error', 'Comment deleted!');
                    res.redirect("/newsletter/" + req.params.id);
                }
            });
        }
    });
});

module.exports = router;