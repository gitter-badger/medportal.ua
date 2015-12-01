var parse = require('co-body')
var router = require('koa-router')();

// responds to /users and /users:id
router
    .get('/', function *(next) {
        yield this.render('login');

    })
    .post('/', function * (next) {
        var body = yield parse(this);

        this.session.user = body.user;
        this.session.pasword = body.password;
        this.state.user = this.session.user;
        yield this.render('login');

        yield next;
    })
/*.post('/', function *(next) {...}})
 .get('/:id', function *(next) {...});*/

module.exports = router;