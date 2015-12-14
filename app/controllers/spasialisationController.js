'use strict';

let manager = require('../managers/spasialisationManager');

module.exports.getAction = function * (next){

    let doctors = yield manager.getDoctorsBySpasialisationId(this.params.id),
        spasialisation = doctors[0].spasialisation_name;

    yield this.render('spasialisation', {doctors: doctors ,spasialisation: spasialisation})
}