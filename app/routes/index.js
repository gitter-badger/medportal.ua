'use strict';
let router = require('koa-router')();

router.use('/', require('./frontpage').routes());
router.use('/login', require('./login').routes());
module.exports = router;