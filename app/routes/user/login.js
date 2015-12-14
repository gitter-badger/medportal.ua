'use strict';

let router = require('koa-router')();

router
    .get('/', require('../../controllers/loginController').getAction)
    .post('/', require('../../controllers/loginController').postAction)


module.exports = router;