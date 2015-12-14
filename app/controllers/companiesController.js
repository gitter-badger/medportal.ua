'use strict';

let manager = require('../managers/companiesManager');

module.exports.getAction = function *(next) {
    let companies = yield manager.getAllCompanies();

    yield this.render('companies', {companies: companies});

}