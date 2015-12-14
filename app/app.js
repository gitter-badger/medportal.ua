'use strict';

let koa = require('koa'),
    config = require('config'),
    serve = require('koa-static'),
    stateVars = require('./helpers/stateVars');



let app = koa();

require('./helpers/bodyparser')(app);

require('./helpers/session')(app);

require('./helpers/render.js')(app, config);

app.use(serve(__dirname + '/../public'));

app.use(function * (next){
    let self = this;
    yield stateVars(self);
    yield next;
});

require('./helpers/passport')(app);

require('./helpers/router')(app);



app.listen(config.server.port, function () {
    console.log('%s listening at port %d', config.app.name, config.server.port);
});