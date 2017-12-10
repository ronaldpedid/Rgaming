const bcrypt = require('bcrypt-nodejs');
const mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose");



const SALT_WORK_FACTOR = 10;

const userSchema = new mongoose.Schema({
    username: {type: String, unique: true},
    password: {type: String},
    firstName: {type: String},
    lastName: {type: String},
    avatar: {type: String},
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    isAdmin: {type: Boolean, default: false},
    email: {type: String, unique: true}
});

userSchema.pre('save', function (next) {
    const user = this;
    if (!user.isModified('password')) return next();
    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        if (err) return next(err);
        bcrypt.hash(user.password, salt, null, function (err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = function (candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, cb);
};

userSchema.plugin(passportLocalMongoose);
const User = mongoose.model('User', userSchema);
module.exports = User;