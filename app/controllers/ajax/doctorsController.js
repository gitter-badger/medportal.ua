'use strict';

let manager = require('../../managers/entryManager');


module.exports.getAction = function * (next){
    let doctors = yield manager.getAllDoctorsNamesAndIdsByCompanyId(this.params.id)

    yield this.render('ajax/doctors', {doctors: doctors, layout: false})
}