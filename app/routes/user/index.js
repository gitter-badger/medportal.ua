'use strict';
let router = require('koa-router')();

router.use('/', require('./frontpage').routes());
router.use('/login', require('./login').routes());
router.use('/logout', require('./logout').routes());
router.use('/companies', require('./companies').routes());
router.use('/company',require('./company').routes());
router.use('/spasialisation', require('./spasialisation').routes());
router.use('/doctor', require('./doctor').routes());
router.use('/registration', require('./registration').routes());
router.use('/verifyUser', require('./verifyUser').routes());
router.use('/test/', require('./test').routes());

module.exports = router;