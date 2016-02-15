'use strict';

let passport = require('koa-passport');



module.exports.postAction = function*(next) {
    var ctx = this;
    yield passport.authenticate('local', function*(err, user, info) {
        if(user){
            if(ctx.session.passport){
                ctx.session.passport.user = user;
            } else{
                ctx.session.passport = {};
                ctx.session.passport.user = user;
            }
            ctx.body = {
                user: {
                    name: user.name + ' ' + user.secondname,
                    phonenamber: user.phone_number,
                    email: user.email
                }
            }
        } else {
            ctx.body = {message: 'Такого користувача не існує. Будь-ласка зареєструйтесь!'}
        }

    }).call(this, next)
};

