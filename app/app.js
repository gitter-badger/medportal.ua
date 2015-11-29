'use strict';

let koa = require('koa'),
    config = require('config'),
    manager = require('./managers/localsManager'),
    router = require('./routes'),
    serve = require('koa-static');

let app = koa();

app.use(serve(__dirname + '../public'));
app.use(function * (next) {
    this.state.doctorNav = yield manager.navSpesialisations();
    this.state.companySlider = yield manager.sliderCompanies();
    this.state.slider = false;
    yield  next;
});


require('./helpers/render.js')(app, config);

app.use(serve(__dirname + '/../public'));

// responds to /users and /users:id



app.use(router.routes());

app.listen(config.server.port, function () {
    console.log('%s listening at port %d', config.app.name, config.server.port);
});