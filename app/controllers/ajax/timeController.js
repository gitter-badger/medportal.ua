'use strict';

let manager = require('../../managers/entryManager');


module.exports.postAction = function * (next){
    let timeObjects = yield manager.getReservedTimeByDayAndDoctorId(this.request.body.doctorId, this.request.body.date),
        reservedTimes = [];

    timeObjects.forEach(function (timeObject){
        reservedTimes.push(timeObject.time)
    })
    this.body = reservedTimes;

}