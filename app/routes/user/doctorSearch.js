'use strict'

let router = require('koa-router')();

// responds to /users and /users:id
router
    .post('/', require('../../controllers/user/doctorSearchController').postAction);

module.exports = router;