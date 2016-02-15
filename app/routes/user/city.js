'use strict'

let router = require('koa-router')();

router
    .get('/:id', require('../../controllers/user/cityController').getAction)


module.exports = router;