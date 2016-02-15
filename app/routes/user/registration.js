'use strict'

let router = require('koa-router')();


router
    .get('/', require('../../controllers/user/registrationController').getAction)
    .post('/', require('../../controllers/user/registrationController').postAction);

module.exports = router;