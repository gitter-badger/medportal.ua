module.exports = function render(app, config, locals) {
    "use strict";

    let render = require('koa-ejs'),
        path = require('path');

    render(app, config.render);
};