'use strict';

let query = require('mysql-query-promise');

let manager = {
    navSpesialisations: function * (){
        var qs = "SELECT `spasialisation` FROM `doctors`";
        return query(qs, 'master');
    },
    sliderCompanies: function * (){
        var qs = "SELECT * FROM `companies`";
        return yield query(qs, 'master');
    }

};



module.exports = manager;
