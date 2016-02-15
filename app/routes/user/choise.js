'use strict'

let router = require('koa-router')();

router
    .post('/', require('../../controllers/user/choiseController').postAction)


module.exports = router;