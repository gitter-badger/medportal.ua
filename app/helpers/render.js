module.exports = function render(app, config) {
    "use strict";

    let render = require('koa-ejs'),
        path = require('path');

    render(app, config.render);
};