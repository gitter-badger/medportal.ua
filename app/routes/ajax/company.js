'use strict'

let router = require('koa-router')();


router
    .post('/', require('../../controllers/ajax/companyController').postAction);

module.exports = router;