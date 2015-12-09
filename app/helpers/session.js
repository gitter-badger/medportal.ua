'use strict';

let session = require('koa-generic-session'),
    MemcachedStore = require('koa-memcached'),
    config = require('config');

module.exports = function (app) {

    app.keys = config.sessionKeys;

    app.use(session({
        store: MemcachedStore()
    }));
}
