
var passport = require('koa-passport')
var router = require('koa-router')();

// responds to /users and /users:id
router
    .get('/', function *(next) {
        yield this.render('login');

    })
    .post('/', passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login'
    }))
/*.post('/', function *(next) {...}})
 .get('/:id', function *(next) {...});*/

module.exports = router;