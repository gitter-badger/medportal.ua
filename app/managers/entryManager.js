'use strict';

let query = require('mysql-query-promise');

let manager = {
    getAllCitiesAndSpasialisationsNamesAndIds: function * (cityId) {
        var qs = "SELECT companyCity_id, companyCity_name, spasialisation_id, spasialisation_name FROM `cities` FULL JOIN spasialisation;";
        return query(qs, [cityId], 'master');
    },
    getAllCompanyNamesAndIdsByCityId: function * (cityId, spasialisation_id) {
        var qs = "SELECT DISTINCT c.company_id, c.company_name, s.companyCity_name, s.companyCity_id, sp.spasialisation_name, sp.spasialisation_id FROM `companies` c JOIN cities s ON c.companyCity_id=s.companyCity_id JOIN doctors d ON c.company_id=d.company_id JOIN spasialisation sp ON d.spasialisation_id=sp.spasialisation_id WHERE c.companyCity_id=? AND sp.spasialisation_id=?";
        return query(qs, [cityId, spasialisation_id], 'master');
    },
    getAllDoctorsNamesAndIdsByCompanyId: function * (company_id) {
        var qs = "SELECT d.doctor_name, d.doctor_id, c.company_name FROM `doctors` d JOIN companies c ON d.company_id=c.company_id WHERE d.company_id=?";
        return query(qs, [company_id], 'master');
    },
    getOneDoctorNameAndIdByDoctorId: function * (doctor_id) {
        var qs = "SELECT d.doctor_name, d.doctor_id, t.monday, t.tuesday, t.wednesday, t.thursday, t.friday, t.saturday, t.sunday FROM `doctors` d LEFT JOIN timetable t ON d.doctor_id=t.doctor_id WHERE d.doctor_id=?";
        return query(qs, [doctor_id], 'master');
    },
    getReservedTimeByDayAndDoctorId: function * (doctor_id, day){
        var qs = "SELECT TIME_FORMAT(`time`, '%H:%i') time FROM `reseption_stamp` WHERE doctor_id=? AND day=?";
        return query(qs, [doctor_id, day], 'master');
    },
    setEntry: function * (doctor_id, day, time, userName, userPhone_number, userEmail){
        var qs = "INSERT INTO `reseption_stamp`(`doctor_id`, `day`, `time`, `userName`, userPhone_number, userEmail) VALUES (?, ?, ?, ?, ?, ?);";
        return query(qs, [doctor_id, day, time, userName, userPhone_number, userEmail], 'master');
    }




}
module.exports = manager;
