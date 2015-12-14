'use strict';
let router = require('koa-router')();

router.use('/getDoctorsByCompanyName', require('./getDoctorsByCompanyName').routes());
router.use('/getDoctorsBySpasialisationName', require('./getDoctorsBySpasialisationName').routes());

module.exports = router;