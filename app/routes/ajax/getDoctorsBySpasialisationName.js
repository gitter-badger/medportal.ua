'use strict'

let router = require('koa-router')();


router
    .post('/', require('../../controllers/getDoctorsBySpasialisationNameController').postAction);

module.exports = router;