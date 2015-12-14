'use strict'

let router = require('koa-router')();

// responds to /users and /users:id
router
    .get('/:id', require('../../controllers/doctorController').getAction);

module.exports = router;