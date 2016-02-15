'use strict';

let manager = require('../../managers/entryManager')



module.exports.postAction = function*(next) {

    let companies = yield manager.getAllCompanyNamesAndIdsByCityId(this.request.body.cityId, this.request.body.spasialisationId);
    yield this.render('ajax/company',{companies:companies, layout: false})
}
