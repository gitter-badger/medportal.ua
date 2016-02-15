'use strict';

let manager = require('../../managers/companiesManager'),
    inArray = require('../../helpers/array').inArray;

module.exports.getAction = function * (next){
    let company = yield manager.getOneCompanyById(this.params.id),
        doctors = yield manager.getDoctorsByCompanyId(this.params.id),
        companySpasialisations = [];

    doctors.forEach(function(doctor){
        if(!inArray(companySpasialisations ,doctor.spasialisation_name)){
            companySpasialisations.push(doctor.spasialisation_name);
        }
    });
    this.session.companyId = this.params.id;
    yield this.render('company', {company: company[0], doctors: doctors, companySpasialisations: companySpasialisations})
}