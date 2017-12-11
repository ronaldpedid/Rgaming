function initializeApp() {
    const express = require('express');
    const path = require('path');
    const favicon = require('serve-favicon');
    const logger = require('morgan');
    const cookieParser = require('cookie-parser');
    const bodyParser = require('body-parser');
    const methodOverride = require('method-override');
    const expressValidator = require('express-validator');
    const session = require('express-session');
    const MongoStore = require('connect-mongo')(session);
    const promise = require('promise');
    const LocalStrategy = require('passport-local').Strategy;
    const handlebars = require('handlebars');
    const hbs = require('hbs');
    const expressHandlebars = require('express-handlebars');
    const User = require('./lib/models/User');
    const Article = require('./lib/models/Article');
    const Comment = require('./lib/models/Comment');
    const passport = require('passport');
    const config = require('./config');
    const secret = "Nibbieamylodgiduke2";
    const flash = require('express-flash');
    const bluebird = require('bluebird');
    const HBSlayouts = require('handlebars-layouts');
    const mailer = require("nodemailer");
    HBSlayouts.register(handlebars);

    //routes
    const index = require('./routes/index');
    const forgot = require('./routes/forgot');
    const users = require('./routes/users');
    const login = require('./routes/login');
    const logout = require('./routes/logout');
    const register = require('./routes/register');
    const newsletter = require('./routes/articles');
    const comment = require('./routes/comments');
    const product = require('./routes/products');
    const credits = require('./routes/credits');
    const contact = require('./routes/contact');
    const howto = require('./routes/how');
    const tos = require('./routes/tos');
    const privacy = require('./routes/privacy');
    const returns = require('./routes/return');

    const app = express();

    passport.use(new LocalStrategy({
            usernameField: 'username',
            passwordField: 'password'
        },
        function (username, password, done) {
            console.log('inside local strategy');
            User.findOne({username: username}, function (err, user) {
                if (err) {
                    console.log(err);
                    return done(err);
                }
                if (!user) {
                    return done(null, false, {message: 'Incorrect username or password'});
                }
                user.comparePassword(password, function (err, isMatch) {
                    console.log(user);
                    if (err) {
                        return done(err);
                    } else if (isMatch) {
                        return done(null, user);
                    } else {
                        return done(null, false, {message: 'Incorrect username or password'});
                    }
                });
            });
        }
    ));

    passport.serializeUser(function (user, done) {
        console.log('serialize', user.id);
        return done(null, user.id)
    });

    passport.deserializeUser(function (id, done) {
        console.log('deserialize', id);
        User.findById(id, function (err, user) {
            if (err) {
                console.log('error in deserialize', err);
                return done(err);
            }
            done(null, user)
        });
    });
    const handleBars = expressHandlebars.create({
        layoutsDir: path.join(__dirname, 'views'),
        partialsDir: path.join(__dirname, 'views', 'partials'),
        defaultLayout: 'layout',
        extname: '.hbs',
        helpers: {
            formatDate: function (dateString) {
                return moment(dateString).format("dddd, MMMM D / h A");
            },
            setChecked: function (value, currentValue) {
                if (value === currentValue) {
                    return "checked"
                } else {
                    return "";
                }
            },
            toISOFormat: function (value) {
                return moment('value').format('YYYY-MM-DDThh:mm');
            },
            formatBlurb: function (body){
                if (body.length >= 400) {
                    return body.substring(0, 300)
                } else {
                    return body;
                }
            }
        }
    });

// view engine setup
    app.engine("hbs", handleBars.engine);
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'hbs');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
    app.use(methodOverride("_method"));
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(cookieParser());
    app.use(expressValidator());
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(session({
        secret: secret,
        maxAge: 60 * 60 * 1000, // ms; lasts for one hour
        resave: false,
        saveUninitialized: false
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(flash());
    const authRouter = express.Router();
    authRouter.use(function (req, res, next) {
        if (req.isAuthenticated()) {
            return next()
        }
        res.redirect('/login');
    });

    app.use('/', index);
    authRouter.use('/forgot/', forgot);
    app.use('/users/', users);
    app.use('/login/', login);
    app.use('/register/', register);
    authRouter.use('/newsletter/', newsletter);
    authRouter.use('/newsletter/:id', newsletter);
    authRouter.use('/newsletter/create', newsletter);
    authRouter.use('/newsletter/:id/comments', comment);
    app.use('/product/', product);
    app.use('/credits/', credits);
    app.use('/contact/', contact);
    app.use('/howto/', howto);
    app.use('/tos/', tos);
    app.use('/privacy/', privacy);
    app.use('/return/', returns);
    authRouter.use('/logout', logout);

// catch 404 and forward to error handler
    app.use(function (req, res, next) {
        const err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

// error handler
    app.use(function (err, req, res, next) {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        // render the error page
        res.status(err.status || 500);
        res.render('error');
    });
    return app;

}

module.exports = initializeApp;
