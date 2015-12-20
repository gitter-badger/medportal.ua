'use strict';

let nodemailer = require('nodemailer'),
    config = require('config');

module.exports = function (name, email, login, password, insertId, verifyCode){
    let transporter = nodemailer.createTransport({
        service: config.nodemailer.sevice,
        auth: {
            user: config.nodemailer.user,
            pass: config.nodemailer.pass
        }
    });
    let message = {

        from: 'SuportMedportal.ua <' + config.nodemailer.user + '>',

        to: '"' + name + '" <' + email +'>',

        subject: 'Підтримка medportal.ua', //

        headers: {
            'X-Laziness-level': 1000
        },

        text: 'Підтримка medportal.ua',

        html: '<p>Привіт. Дякуемо за регістрацію на <b>medportal.ua</b></p>' +
        '<p>Ваш логін:' + login + '</p>' +
        '<p>Ваш пароль:' + password + '</p>' +
        '<p>Перейдіть будь-ласка за посиланням:\nhttp://localhost:4000/verifyUser?id=' + insertId + '&code=' + verifyCode + '\n</p>'
    };
    transporter.sendMail(message).then(function(info){

        console.log('Message sent successfully!');
        console.log('Server responded with "%s"', info.response);

    }).catch(function(){
        console.log('Error occurred');
        console.log(error.message);
        return;
    });
};