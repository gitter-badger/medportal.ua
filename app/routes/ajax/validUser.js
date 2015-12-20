'use strict'

let router = require('koa-router')();


router
    .post('/', require('../../controllers/validUserController').postAction);

module.exports = router;