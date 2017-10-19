const express = require('express');
const router = express.Router();
const flash = require('express-flash');
const User = require('../lib/models/User');


router.get('/', function (req, res, next) {
    res.render('register');
});

router.post('/', function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;

    //validation
    if (username.length <= 2) {
        req.flash('failure', 'username to short');
        return res.redirect('/register');
    }
    const newuser = new User();
    newuser.username = username;
    newuser.password = password;
    newuser.firstname = firstname;
    newuser.lastname = lastname;
    newuser.email = email;
    console.log(newuser.email);
    newuser.save(function (err, savedUser) {
        if (err) {
            console.log(err);
            return res.status(500).send();
        }
        return res.redirect('/login');
    })
});

module.exports = router;