'use strict';
let router = require('koa-router')(),
    changeNav = require('../../helpers/changeNav');

router.use(changeNav('user'))
router.use('/', require('./frontpage').routes());
router.use('/login', require('./login').routes());
router.use('/logout', require('./logout').routes());
router.use('/city', require('./city').routes());
router.use('/company',require('./company').routes());
router.use('/spasialisation', require('./spasialisation').routes());
router.use('/doctor', require('./doctor').routes());
router.use('/registration', require('./registration').routes());
router.use('/verifyUser', require('./verifyUser').routes());
router.use('/entry', require('./entry').routes());
router.use('/choise', require('./choise').routes());
router.use('/doctorSearch', require('./doctorSearch').routes());
router.use('/test/', require('./test').routes());


module.exports = router;