'use strict'

let router = require('koa-router')();

router
    .post('/', require('../../controllers/ajax/timeController').postAction);

module.exports = router;