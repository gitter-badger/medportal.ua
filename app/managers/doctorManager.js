'use strict';

let query = require('mysql-query-promise');

let manager = {
    getDoctorByDoctorId: function * (id){
        var qs = "SELECT d.doctor_name, d.doctor_id, d.doctor_describe, d.doctor_logo, d.company_id, d.spasialisation_id, s.spasialisation_name, c.company_name, c.companyCity_id, t.monday,t.tuesday, t.wednesday, t.thursday, t.friday, t.saturday, t.sunday FROM `doctors` `d`JOIN `spasialisation` `s` ON d.spasialisation_id=s.spasialisation_id JOIN `companies` `c` ON d.company_id=c.company_id JOIN timetable t ON d.doctor_id=t.doctor_id WHERE d.doctor_id=?";
        return query(qs, [id], 'master');
    },
    getDoctorsByCompanyName: function * (name){
        var qs = "SELECT d.doctor_name, d.doctor_id FROM `doctors` d JOIN companies c ON c.company_id=d.company_id WHERE c.company_name=?;";
        return query(qs, [name], 'master')
    },
    getDoctorsBySpasialisationName: function * (name){
        var qs = "SELECT d.doctor_name, d.doctor_id FROM `doctors` d JOIN spasialisation s ON s.spasialisation_id=d.spasialisation_id WHERE s.spasialisation_name=?;";
        return query(qs, [name], 'master')
    },
    getDoctorsByDoctorName: function * (doctorName){
        var qs = "SELECT d.doctor_name, d.doctor_id, d.doctor_describe, d.doctor_logo, d.company_id, d.companyCity_id, d.spasialisation_id, s.spasialisation_name, c.company_name FROM `doctors` `d`JOIN `spasialisation` `s` ON d.spasialisation_id=s.spasialisation_id JOIN `companies` `c` ON d.company_id=c.company_id WHERE d.doctor_name LIKE ?;";

        return query(qs, [doctorName], 'master')
    },
    getDoctorsBySpasialisationId: function * (id){
        var qs = "SELECT d.doctor_name, d.doctor_id, d.doctor_describe, d.doctor_logo, d.company_id, d.companyCity_id, d.spasialisation_id, s.spasialisation_name, c.company_name FROM `doctors` `d`JOIN `spasialisation` `s` ON d.spasialisation_id=s.spasialisation_id JOIN `companies` `c` ON d.company_id=c.company_id WHERE d.spasialisation_id=?";
        return query(qs, [id], 'master');
    }

}
module.exports = manager;