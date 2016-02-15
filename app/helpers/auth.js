'use strict';

let passport = require('koa-passport'),
    manager = require('../managers/passportManager'),
    co = require('co');

let LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(function (username, password, done) {

        manager.getUserByName(username, function(err, user){
            if (!user[0]) {

                return done(null, false);

            }else{
                if(user[0].login != username){
                    return done(null, false);
                }
                if (user[0].password != password) {
                    return done(null, false);
                }
            }
            return done(null, user[0]);
        });

}))