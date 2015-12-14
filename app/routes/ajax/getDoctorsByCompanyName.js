'use strict'

let router = require('koa-router')();


router
    .post('/', require('../../controllers/getDoctorsByCompanyNameController').postAction);

module.exports = router;