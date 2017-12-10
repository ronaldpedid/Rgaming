const express = require('express');
const router = express.Router();
const User = require('../lib/models/User');
const passport = require('passport');

router.get('/', function (req, res, next) {
    if (req.user) {
        res.redirect('/');
    } else {
        res.render('login', {
            success: false,
            errors: req.session.errors
        });
    }
});


router.post('/', passport.authenticate('local',
    {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
    }));
module.exports = router;