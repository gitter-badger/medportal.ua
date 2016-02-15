'use strict'

let router = require('koa-router')();

// responds to /users and /users:id
router
    .get('/:id', require('../../controllers/user/spasialisationController').getAction);

module.exports = router;