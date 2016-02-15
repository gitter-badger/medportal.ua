'use strict'

let router = require('koa-router')();

router
    .get('/:id', require('../../controllers/ajax/doctorsController').getAction);

module.exports = router;