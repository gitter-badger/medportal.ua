var router = require('koa-router')();

// responds to /users and /users:id
router
    .get('/', require('../../controllers/logoutController').getAction);

module.exports = router;