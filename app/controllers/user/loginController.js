'use strict';

let passport = require('koa-passport');

    module.exports.getAction = function *(next) {
    if(!this.state.slider) {
        this.state.slider = true;
        yield this.render('login');
        this.state.slider = false;
    } else {
        yield this.render('login');
        this.state.slider = false;
    }
};

module.exports.postAction = passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
});