'use strict';

let Router = require('koa-router'),
    changeNav = require('../../helpers/changeNav'),
    companyAdmin = new Router(),
    companyAdminRoutes = new Router();



companyAdmin.use(changeNav('companyAdmin'));



companyAdminRoutes.use('/', require('./frontpage').routes());

companyAdmin.use('/companyAdmin', companyAdminRoutes.routes(), companyAdminRoutes.allowedMethods());

companyAdmin.get('/companyAdmin', function * (){
    this.body = 'dfgfdgdfgfdfddfgfgdffdbhhgj,kj.jhgghjgfdgddssszxc';
})
module.exports = companyAdmin;