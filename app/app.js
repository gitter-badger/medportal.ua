'use strict';

let koa = require('koa'),
    config = require('config'),
    router = require('./routes'),
    serve = require('koa-static'),
    stateVars = require('./helpers/stateVars');

let app = koa();

require('./helpers/session')(app);

require('./helpers/render.js')(app, config);

app.use(serve(__dirname + '/../public'));

app.use(function * (next){
    this.state = yield stateVars();
    yield next;
});

app.use(router.routes());

app.listen(config.server.port, function () {
    console.log('%s listening at port %d', config.app.name, config.server.port);
});