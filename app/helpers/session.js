'use strict';

let session = require('koa-generic-session'),
    MemcachedStore = require('koa-memcached');
    /*RethinkSession = require('koa-generic-session-rethinkdb'),
    rethinkdb = require('rethinkdbdash'),
    co = require('co'),
    config = require('config');*/


module.exports = function (app) {
    /*let connection = rethinkdb(config.store.connection);

     let sessionStore = new RethinkSession({
     connection: connection,
     db: config.sessionStore.db,
     table: config.sessionStore.table
     });
     co(sessionStore.setup()).then(x =>
     console.log('Session setup succeeded')
     , e => console.log('Session setup failed', e))*/
    app.keys = ['keys', 'keykeys'];

    app.use(session({
        store: MemcachedStore()
    }));
}
