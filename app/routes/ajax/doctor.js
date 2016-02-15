'use strict'

let router = require('koa-router')();

router
    .get('/:id', require('../../controllers/ajax/doctorController').getAction);

module.exports = router;