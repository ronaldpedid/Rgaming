const express = require('express');
const router = express.Router();
const User = require('../lib/models/User');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('all users coming soon');
});

router.get('/users/:id', function(req, res){
  User.findById(req.params.id, function(err, foundUser){
    if (err){
      res.flash("error", "Something went wrong.");
      res.redirect("/");
    }
    res.render('users/show', {user: foundUser});
  })
});
module.exports = router;
