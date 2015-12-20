'use strict'

let router = require('koa-router')();


router
    .get('/', require('../../controllers/registrationController').getAction)
    .post('/', require('../../controllers/registrationController').postAction);

module.exports = router;