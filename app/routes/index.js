'use strict';
let router = require('koa-router')();

router
    .use(require('./user').routes())
    .use(require('./user').allowedMethods());

router
    .use('/ajax', require('./ajax').routes())
    .use('/ajax', require('./ajax').allowedMethods());

router
    .use(require('./companyAdmin').routes())
    .use(require('./companyAdmin').allowedMethods());

module.exports = router;