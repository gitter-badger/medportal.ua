'use strict';
let router = require('koa-router')();

router.use('/getDoctorsByCompanyName', require('./getDoctorsByCompanyName').routes());
router.use('/getDoctorsBySpasialisationName', require('./getDoctorsBySpasialisationName').routes());
router.use('/validUser', require('./validUser').routes());

module.exports = router;