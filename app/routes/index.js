'use strict';
let router = require('koa-router')();

router.use('/', require('./frontpage').routes());

module.exports = router;