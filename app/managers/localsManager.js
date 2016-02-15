'use strict';

let query = require('mysql-query-promise');

let manager = {
    navSpasialisations: function * (){
        var qs = "SELECT `spasialisation_name`, `spasialisation_id`  FROM `spasialisation`";
        return query(qs, 'master');
    },
    sliderCompanies: function * (){
        var qs = "SELECT company_id, company_name, company_logoPath FROM `companies`";
        return yield query(qs, 'master');
    },
    getCompaniesCities: function * (){
        var qs = "SELECT companyCity_id, companyCity_name FROM `cities`";
        return yield query(qs, 'master');
    }

};



module.exports = manager;
