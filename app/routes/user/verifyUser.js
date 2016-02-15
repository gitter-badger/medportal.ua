'use strict'

let router = require('koa-router')();


router
    .get('/', require('../../controllers/user/verifyUserController').getAction)


module.exports = router;