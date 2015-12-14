'use strict';

let manager = require('../managers/doctorManager');

module.exports.postAction = function * (next){
    let company = this.request.body.company,
        doctor = this.request.body.doctorName,
        doctors = yield manager.getDoctorsByCompanyName(company);

    for(var i = 0; i < doctors.length; i++){
        if(doctors[i].doctor_name == doctor){
            doctors.splice(i, 1);
        }
    }

    yield this.render('getDoctors', {doctors: doctors , layout: false})
}