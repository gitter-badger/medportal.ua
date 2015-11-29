var router = require('koa-router')();

// responds to /users and /users:id
router
    .get('/', function *(next) {
        if(!this.state.slider) {
            this.state.slider = true;
            yield this.render('frontpage');
            this.state.slider = false;
        } else {
            yield this.render('frontpage');
            this.state.slider = false;
        }

    });
/*.post('/', function *(next) {...}})
 .get('/:id', function *(next) {...});*/

module.exports = router;