'use strict';

let manager = require('../managers/registrationManager'),
    md5 = require('crypto-js/md5');



module.exports.getAction = function * (next){

    let companies = yield manager.getLimitCompanies(2);

    yield this.render('registration', {companies: companies, message: ''});
};

module.exports.postAction = function * (next) {

    let companies = yield manager.getLimitCompanies(2),
        newUser = {};

    for(let key in this.request.body){
        newUser[key] = this.request.body[key].replace('/\0/g', '0').replace('/\(.)/g', '$1').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#039;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    if(!(newUser.username) ||!(newUser.password)||!(newUser.email)||!(newUser.phonenamber)||!(newUser.name)||!(newUser.secondname)||!(newUser.year)||!(newUser.month)||!(newUser.day)){

        yield this.render('registration', {companies: companies, message: 'Превірте правельність заповнення форми!'});

    } else if(!(/[0-9a-z_]+@[0-9a-z_^\.]+\.[a-z]{2,3}/i.test(newUser.email))){

        yield this.render('registration', {companies: companies, message: 'Некоректно введена пошта!'});

    }else{
        let today = new Date(),
        dd = today.getDate(),
        mm = today.getMonth()+1,
        yyyy = today.getFullYear();

        if(dd<10){
            dd='0'+dd
        }

        if(mm<10){
            mm='0'+mm
        }

        today = yyyy+'-'+mm+'-'+dd;

        if(newUser.day<10) {
            newUser.day = '0' + newUser.day;
        }

        if(newUser.month<10) {
            newUser.month = '0' + newUser.month;
        }

        let result = yield manager.setUser(newUser, today);

        let verifyCode = md5(newUser.username) + md5(newUser.password);

        require('../helpers/nodemailer')(newUser.name, newUser.email, newUser.username, newUser.password, result.insertId, verifyCode);

        yield this.render('registration', {companies: companies, message: 'Вам на пошту вислано лист з  посиланням, для підтвердження регістрації. Увага! Посилання дійсне 1 добу!'});
    }





}