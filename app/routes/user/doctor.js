'use strict'

let router = require('koa-router')();

// responds to /users and /users:id
router
    .get('/:id', require('../../controllers/user/doctorController').getAction);

module.exports = router;