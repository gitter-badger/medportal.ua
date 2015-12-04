var passport = require('koa-passport');
var manager = require('../managers/userManager');
var co = require('co');


/*
passport.serializeUser(function(user, done) {
    done(null, user.id)
})

passport.deserializeUser(function(id, done) {
    done(null, user)
})*/


var LocalStrategy = require('passport-local').Strategy
passport.use(new LocalStrategy(function (username, password, done) {
    // retrieve user ...

        manager.getUserByName(username, function(err, user){
            if (!user[0]) {
                return done(null, false);
            }else{
                if (user[0].password != password) {
                    throw err = 'incorect password!'
                    return done(null, false);
                }
            }

            return done(null, user[0]);
        });

}))