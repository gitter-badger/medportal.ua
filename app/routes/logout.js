var router = require('koa-router')();

// responds to /users and /users:id
router
    .get('/', function * (){
        this.logout();
        this.redirect('/');
    });

module.exports = router;