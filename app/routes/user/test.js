'use strict'

let router = require('koa-router')(),
    url = require('url');

// responds to /users and /users:id
router
    .get('/', function * (next){
        let id = 10;
        console.log(this.request.query.id);

        this.body = 'ok'
    });

module.exports = router;