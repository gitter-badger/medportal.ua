'use strict';

let manager = require('../../managers/entryManager'),
    objectInArray = require('../../helpers/array').objectInArray;

module.exports.getAction = function * (next){
    let user, cities = [], spasialisations = [], citiesAndSpasialisations, companies, doctors, doctor;

    if(this.session.passport) {
        if (this.session.passport.user) {
            user = this.session.passport.user;

        } else {
            user = false;

        }
    } else {
        user = false;
    }

    citiesAndSpasialisations = yield manager.getAllCitiesAndSpasialisationsNamesAndIds();

    citiesAndSpasialisations.forEach(function(cityAndSpasialisation){

        if(!objectInArray(cities ,cityAndSpasialisation.companyCity_name)){

            cities.push({
                name: cityAndSpasialisation.companyCity_name,
                id: cityAndSpasialisation.companyCity_id
            });
        }

        if(!objectInArray(spasialisations ,cityAndSpasialisation.spasialisation_name)){

            spasialisations.push({
                name: cityAndSpasialisation.spasialisation_name,
                id: cityAndSpasialisation.spasialisation_id
            });
        }
    })

    if(this.request.query.city_id && this.request.query.spacialisation_id) {
        companies = yield manager.getAllCompanyNamesAndIdsByCityId(this.request.query.city_id, this.request.query.spacialisation_id)

    } else {
        companies = false;
    }

    if(this.request.query.company_id) {
        doctors= yield manager.getAllDoctorsNamesAndIdsByCompanyId(this.request.query.company_id)
    } else {
        doctors = false;
    }

    if(this.request.query.doctor_id){
        doctor = yield manager.getOneDoctorNameAndIdByDoctorId(this.request.query.doctor_id)
    } else {
        doctor = false;
    }

    yield this.render('entry',{user: user, cities: cities, spasialisations: spasialisations, companies: companies, doctors: doctors, doctor: doctor[0]})

};