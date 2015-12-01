'use strict';

let session = require('koa-generic-session'),
    RethinkSession = require('koa-generic-session-rethinkdb'),
    rethinkdb = require('rethinkdbdash'),
    co = require('co');

module.exports = function (app) {
    let connection = rethinkdb({
        host: 'localhost',
        port: 28015
    });

    let sessionStore = new RethinkSession({connection: connection,
        db: 'medportal',
        table: 'userSid' });

    co(sessionStore.setup()).then(x =>
            console.log('Session setup succeeded')
        , e => console.log('Session setup failed', e))
    app.keys = ['keys', 'keykeys'];

    app.use(session({
        store: sessionStore
    }));
}
