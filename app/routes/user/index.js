'use strict';
let router = require('koa-router')();

router.use('/', require('./frontpage').routes());
router.use('/login', require('./login').routes());
router.use('/logout', require('./logout').routes());
router.use('/companies', require('./companies').routes());
router.use('/company',require('./company').routes());
router.use('/spasialisation', require('./spasialisation').routes());
router.use('/doctor', require('./doctor').routes());

module.exports = router;