'use strict';

let query = require('mysql-query-promise');

let manager = {
    getAllCompanies: function * () {
        var qs = "SELECT * FROM `companies`";
        return query(qs, 'master');
    },
    getOneCompanyById: function * (id) {
        var qs = "SELECT * FROM `companies` WHERE company_id=?;";
        return query(qs, [id, id], 'master');
    },
    getDoctorsByCompanyId: function * (id) {
        var qs = "SELECT d.doctor_name, d.doctor_name, d.doctor_id, d.doctor_describe, s.spasialisation_name FROM `doctors` `d`JOIN `spasialisation` `s` ON d.spasialisation_id=s.spasialisation_id WHERE d.company_id=?;";
        return query(qs, [id], 'master');
    },


}
module.exports = manager;
