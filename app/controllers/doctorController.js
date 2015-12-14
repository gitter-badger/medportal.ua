'use strict';

let manager = require('../managers/doctorManager');

module.exports.getAction = function * (next) {

    let doctorArray = yield manager.getDoctorByDoctorId(this.params.id),
        doctor = doctorArray[0];
    if (doctor.monday){
        doctor.monday = doctor.monday.split(',');
    }

    if (doctor.tuesday){
        doctor.tuesday = doctor.tuesday.split(',');
    }

    if (doctor.wednesday){
        doctor.wednesday = doctor.wednesday.split(',');
    }

    if (doctor.thursday){
        doctor.thursday = doctor.thursday.split(',');
    }

    if (doctor.friday){
        doctor.friday = doctor.friday.split(',');
    }

    if (doctor.saturday){
        doctor.saturday = doctor.saturday.split(',');
    }

    if (doctor.sunday){
        doctor.sunday = doctor.sunday.split(',');
    }

    yield this.render('doctor', {doctor: doctor});
}