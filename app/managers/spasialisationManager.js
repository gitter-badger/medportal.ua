'use strict';

let query = require('mysql-query-promise');

let manager = {
    getDoctorsBySpasialisationId: function * (id){
        var qs = "SELECT d.doctor_name, d.doctor_id, d.doctor_describe, d.doctor_logo, s.spasialisation_name, c.company_name FROM `doctors` `d`JOIN `spasialisation` `s` ON d.spasialisation_id=s.spasialisation_id JOIN `companies` `c` ON d.company_id=c.company_id WHERE d.spasialisation_id=?";
        return query(qs, [id], 'master');
    }

}
module.exports = manager;