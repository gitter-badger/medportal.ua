var query = require('mysql-query-promise');

var manager = {
    navSpesialisations: function * (){
        var qs = "SELECT `spasialisation` FROM `doctors`";
        return yield query(qs, 'master');
    },
    sliderCompanies: function * (){
        var qs = "SELECT * FROM `companies`";
        return yield query(qs, 'master');
    }

};



module.exports = manager;
