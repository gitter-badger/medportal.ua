'use strict';

let manager = require('../../managers/entryManager');


module.exports.getAction = function * (next) {
    let doctorArr = yield manager.getOneDoctorNameAndIdByDoctorId(this.params.id),
        timetable = {
        monday: doctorArr[0].monday.split(','),
        tuesday: doctorArr[0].tuesday.split(','),
        wednesday: doctorArr[0].wednesday.split(','),
        thursday: doctorArr[0].thursday.split(','),
        friday: doctorArr[0].friday.split(',')
    };

    if (doctorArr[0].saturday){
        timetable.saturday = doctorArr[0].saturday.split(',');
    } else {
        timetable.saturday = [''];
    }
    if (doctorArr[0].sunday){
        timetable.sunday = doctorArr[0].saturday.split(',');
    } else {
        timetable.sunday = [''];
    }
    this.body = {
        timetable: timetable,
        doctorId: doctorArr[0].doctor_id
    }
};