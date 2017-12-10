const express = require('express');
const router = express.Router();
const secret = '6Lf89ToUAAAAAG6uBv2cgnzjPCTzQ4KQINSh-XO7';

router.get('/', function(req, res, next){
    res.render('contact/index');
});

router.post('https://www.google.com/recaptcha/api/siteverify', function(req, res){
    res.send(response);
});

module.exports = router;