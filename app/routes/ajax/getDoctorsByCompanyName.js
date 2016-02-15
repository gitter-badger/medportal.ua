'use strict'

let router = require('koa-router')();


router
    .post('/', require('../../controllers/ajax/getDoctorsByCompanyNameController').postAction);

module.exports = router;