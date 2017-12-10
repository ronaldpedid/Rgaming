const express = require('express');
const router = express.Router();
const flash = require('express-flash');
const User = require('../lib/models/User');


router.get('/', function (req, res, next) {
    res.render('register', {
        success: false,
        errors: req.session.errors
    });
});

router.post('/', function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;


    const newuser = new User();
    newuser.username = username;
    newuser.password = password;
    newuser.firstname = firstname;
    newuser.lastname = lastname;
    newuser.email = email;

    //validation
    req.check('username', 'Username is to short.').isLength({min: 2});
    req.check('password', 'Passwords do not match').isLength({min: 4}).equals(req.body.confirmPassword);
    req.check('email', 'E-mail Address is invalid').isEmail();
    req.check('firstname', 'Please Enter your first name').isLength({min: 2});
    req.check('lastname', 'Please Enter your last name').isLength({min: 2});

    let errors = req.validationErrors();
    if (errors) {
        req.session.errors = errors;
        return res.redirect('/register');
    }

    newuser.save(function (err, savedUser) {
        if (err) {
            console.log(err);
            return res.status(500).send();
        }
        return res.redirect('/login');
    })
});

module.exports = router;