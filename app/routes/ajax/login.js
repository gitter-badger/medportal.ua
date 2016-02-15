'use strict'

let router = require('koa-router')();


router
    .post('/', require('../../controllers/ajax/loginController').postAction);

module.exports = router;