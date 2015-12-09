'use strict';

module.exports = function bodyparser(app) {

    let bodyParser = require('koa-bodyparser');

    app.use(bodyParser());
};