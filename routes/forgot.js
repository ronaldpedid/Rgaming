const express = require('express');
const router = express.Router();
const flash = require('express-flash');
const creds = require('../creds');
const User = require('../lib/models/User');
const async = require('async');
const nodemailer = require('nodemailer');
const crypto = require('crypto');

//reset password
router.get('/', function(req, res){
    res.render('forgot');
});

router.post('/', function(req,res,next){
    async.waterfall([
        function(done){
            crypto.randomBytes(20, function(err, buf){
                let token = buf.toString('hex');
                done(err, token);
            });
        },
        function(token, done){
            User.findOne({email: req.body.email}, function(err, user){
                if(!user){
                    req.flash('error', 'No account exists.');
                    return res.redirect('/forgot');
                }
                    console.log(user);
                user.resetPasswordToken = token;
                user.resetPasswordExpires = Date.now() + 3600000;
                console.log(token);
                user.save(function(err){
                    done(err, token, user);
                });
            });
        },
        function(token, user, done){
            let smtpTransport = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: 'elementfayt@gmail.com',
                    pass: 'Nibbiepie420'
                }
            });
            let mailOptions = {
                to: user.email,
                from: 'ronaldpedid@live.com',
                subject: 'Password Reset',
                text: 'You are receiving this notification because someone (maybe you) has requested' +
                'to change the password for this account. Please Click the following link to complete the' +
                'process:' + '\n\n' +
                'http://' + req.headers.host + '/forgot/reset/' + token + '\n\n' +
                ' If you are getting this email in error, please ignore. Thank you!'
            };
            smtpTransport.sendMail(mailOptions, function(err){
                console.log('jobs done - mail sent success!');
                req.flash('success', 'An email has been sent to ' + user.email + ' with further instructions.' );
                done(err, 'done');
            });
        }
    ], function(err){
        if (err) return next(err);
        res.redirect('/forgot');
    });
});

router.get('/reset', function(req, res){
   res.render('reset');
});

router.get('/reset/:token', function(req, res){
    User.findOne({resetPasswordToken: req.params.token, resetPasswordExpires: {$gt: Date.now()}}, function(err, user){
        console.log(user);
        if(!user){
            req.flash('error', 'Password token is invalid or expired');
            return res.redirect('/forgot');
        }
        res.render('reset', {token: req.params.token});
    });
});

router.post('/reset/:token', function(req, res){
    async.waterfall([
        function(done){
            User.findOne({resetPasswordToken: req.params.token, resetPasswordExpires: {$gt: Date.now()}}, function(err, user){
                if(!user){
                    req.flash('error', 'Password token is invalid or expired');
                    return res.redirect('back');
                }
                if(req.body.password === req.body.confirm){
                user.setPassword(req.body.password, function(err){
                    user.resetPasswordToken = undefined;
                    user.resetPasswordExpires = undefined;
                    
                    user.save(function(err){
                        req.logIn(user, function(err){
                            done(err, user);
                        });
                    });
                })
            } else {
                req.flash('error', "passwords do not match.");
                return res.redirect('back')
                }
            });
        },
        function (user, done) {
            let smtpTransport = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: 'elementfayt@gmail.com',
                    pass: 'Nibbiepie420'
                }
            });
            let mailOptions = {
                to: user.email,
                from: 'ronaldpedid@live.com',
                subject: 'Password Reset',
                text: 'This is a confirmation that the password has been changed.'
            };
            smtpTransport.sendMail(mailOptions, function(err){
                console.log('jobs done well!');
                req.flash('success', 'Your Password has changed.' );
                done(err, 'done');
            });
        }
    ], function(err){
        if (err) return next(err);
        res.redirect('/');
    });
});
module.exports = router;