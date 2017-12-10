const express = require('express');
const router = express.Router();


router.get('/', function (req, res, next) {
    if (req.user) {
        req.logout();
        res.locals.user = null;
        req.flash('success', 'You have successfully logged out!');
        res.redirect('/');
    } else {
        req.flash('error', 'You must be logged in to do that.');
        res.render('back');
    }
});

module.exports = router;