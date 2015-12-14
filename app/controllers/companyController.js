'use strict';
Array.prototype.inArray = function (value)
{
    let i;
    for (i=0; i < this.length; i++)
    {
        if (this[i] == value)
        {
            return true;
        }
    }
    return false;
};

let manager = require('../managers/companiesManager');

module.exports.getAction = function * (next){
    let company = yield manager.getOneCompanyById(this.params.id),
        doctors = yield manager.getDoctorsByCompanyId(this.params.id),
        companySpasialisations = [];

    doctors.forEach(function(doctor){
        if(!companySpasialisations.inArray(doctor.spasialisation_name)){
            companySpasialisations.push(doctor.spasialisation_name);
        }
    });



    yield this.render('company', {company: company[0], doctors: doctors, companySpasialisations: companySpasialisations})
}