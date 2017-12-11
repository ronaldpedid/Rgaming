const express = require('express');
const router = express.Router();
const secret = '6Lf89ToUAAAAAG6uBv2cgnzjPCTzQ4KQINSh-XO7';
const nodemailer = require('nodemailer');




router.get('/', function (req, res, next) {
    res.render('contact/index', {
        action: "/contact/send"
    });
});

router.post('https://www.google.com/recaptcha/api/siteverify', function (req, res) {
    res.send(response);
});


router.post('/send', function (req, res) {
    console.log(req.body);
    const output =
        `<h1>Forum Submission Feedback</h1>
        <p></p> 
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
        </ul>       
      <p>Message: ${req.body.message}</p>`;

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'mail.renaissancegamesupply.com',
        port: 26,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'ronald.pedid@renaissancegamesupply.com', // generated ethereal user
            pass: 'Nibbiepie420'  // generated ethereal password
        },
        tls:{
            rejectUnauthorized:false
        }
    });


    let mailOptions = {
        from: 'Form Contact <ronald.pedid@renaissancegamesupply.com>', // sender address
        to: 'ronald.pedid@renaissancegamesupply.com', // list of receivers
        subject: 'Forum Contact', // Subject line
        text: 'A new raven has arrived.', // plain text body
        html: output // html body
    };


    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        res.render('contact/index', {msg:'Your raven has taken flight.'});
    });

});


module.exports = router;