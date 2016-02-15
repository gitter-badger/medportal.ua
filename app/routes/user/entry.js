'use strict'

let router = require('koa-router')();

// responds to /users and /users:id
router
    .get('/', require('../../controllers/user/entryController').getAction);

module.exports = router;