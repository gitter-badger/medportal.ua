'use strict';

let manager = require('../managers/registrationManager'),
    md5 = require('crypto-js/md5');

module.exports.getAction = function * (next) {
    yield manager.dropNotVerifiedUsers;

    let user = yield manager.getUserForVerify(this.request.query.id);
    this.state.slider = true;

    if(user[0]){
        var verifyCode = md5(user[0].login) + md5(user[0].password);
        if(verifyCode == this.request.query.code){
            yield manager.updateVerifyEmailInUser(this.request.query.id);
            yield this.render('verifyUser',{message: 'Ви пройшли авторизацію. Будь-ласка увійдіть на <a href="/login">сайт</a>'})
            this.state.slider = false;
        }else{
            yield this.render('verifyUser',{message: 'Ви вже авторизовані або якщо ваш час вийшов, повторіть будь-ласка <a href="/registration">регістрацію</a>'})
            this.state.slider = false;
        }
    } else{
        yield this.render('verifyUser',{message: 'Ви вже авторизовані або якщо ваш час вийшов, повторіть будь-ласка <a href="/registration">регістрацію</a>'})
        this.state.slider = false;
    }



}