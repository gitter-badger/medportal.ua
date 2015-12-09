'use strict';

let router = require('../routes');

module.exports = function (app){

    app.use(router.routes());
    
};