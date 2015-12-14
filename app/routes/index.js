'use strict';
let router = require('koa-router')();

router.use(require('./user').routes());

router.use('/ajax', require('./ajax').routes());

module.exports = router;