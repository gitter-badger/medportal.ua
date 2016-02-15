'use strict';

let manager = require('../../managers/doctorManager');

module.exports.postAction = function * (next){
    let spasialisation = this.request.body.spasialisation,
        doctor = this.request.body.doctorName,
        doctors = yield manager.getDoctorsBySpasialisationName(spasialisation);

    for(var i = 0; i < doctors.length; i++){
        if(doctors[i].doctor_name == doctor){
            doctors.splice(i, 1);
        }
    }

    yield this.render('ajax/getDoctors', {doctors: doctors , layout: false})
}