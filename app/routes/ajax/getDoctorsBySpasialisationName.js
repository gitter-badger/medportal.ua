'use strict'

let router = require('koa-router')();


router
    .post('/', require('../../controllers/ajax/getDoctorsBySpasialisationNameController').postAction);

module.exports = router;