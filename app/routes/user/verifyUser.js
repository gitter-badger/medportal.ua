'use strict'

let router = require('koa-router')();


router
    .get('/', require('../../controllers/verifyUserController').getAction)


module.exports = router;