"use strict";

module.exports = function render(app, config) {

    let render = require('koa-ejs'),
        path = require('path');

    render(app, config.render);
};