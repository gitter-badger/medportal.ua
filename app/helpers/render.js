"use strict";

module.exports = function render(app, config) {

    let render = require('koa-ejs');

    render(app, config.render);
};