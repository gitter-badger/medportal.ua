'use strict'

var router = require('koa-router')();

// responds to /users and /users:id
router
    .get('/', function *(next) {

        if(!this.state.slider) {
            this.state.slider = true;
            let user = '';
            if(this.session.passport){
                user = this.session.passport.user.name;
            }
            console.log(user);
            yield this.render('frontpage',{user: user});
            this.state.slider = false;
        } else {
            yield this.render('frontpage');
            this.state.slider = false;
        }

    });

module.exports = router;