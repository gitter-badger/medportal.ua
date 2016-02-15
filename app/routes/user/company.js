'use strict'

let router = require('koa-router')();

router
    .get('/:id', require('../../controllers/user/companyController').getAction);

module.exports = router;