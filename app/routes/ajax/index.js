'use strict';
let router = require('koa-router')();

router.use('/getDoctorsByCompanyName', require('./getDoctorsByCompanyName').routes());
router.use('/getDoctorsBySpasialisationName', require('./getDoctorsBySpasialisationName').routes());
router.use('/login', require('./login').routes());
router.use('/company', require('./company').routes());
router.use('/doctors', require('./doctors').routes());
router.use('/doctor', require('./doctor').routes());
router.use('/time', require('./time').routes());

module.exports = router;