'use strict'

let router = require('koa-router')();


// responds to /users and /users:id
router
    .get('/', require('../../controllers/frontpageController').getAction);

module.exports = router;