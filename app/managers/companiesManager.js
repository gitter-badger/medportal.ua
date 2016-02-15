'use strict';

let query = require('mysql-query-promise');

let manager = {
    getAllCompaniesByCityid: function * (companyCity_id) {
        var qs = "SELECT * FROM `companies` WHERE companyCity_id=?";
        return query(qs, [companyCity_id], 'master');
    },
    getOneCompanyById: function * (id) {
        var qs = "SELECT * FROM `companies` WHERE company_id=?;";
        return query(qs, [id], 'master');
    },
    getDoctorsByCompanyId: function * (id) {
        var qs = "SELECT d.doctor_name, d.doctor_name, d.doctor_id, d.doctor_describe, s.spasialisation_name FROM `doctors` `d`JOIN `spasialisation` `s` ON d.spasialisation_id=s.spasialisation_id WHERE d.company_id=?;";
        return query(qs, [id], 'master');
    },


}
module.exports = manager;
