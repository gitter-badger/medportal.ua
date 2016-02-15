'use strict';

let router = require('koa-router')();

router
    .get('/', require('../../controllers/user/loginController').getAction)
    .post('/', require('../../controllers/user/loginController').postAction)


module.exports = router;