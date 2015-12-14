'use strict'

let router = require('koa-router')();

router
    .get('/', require('../../controllers/companiesController').getAction)


module.exports = router;