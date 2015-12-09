'use strict';

let passport = require('koa-passport');

module.exports = function (app) {

    require('./auth');
    
    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    passport.deserializeUser(function(user, done) {
        done(null, user);
    });

};