var mysql      = require('mysql');
var config = require('config');
var connection = mysql.createConnection(config.database.master);

connection.connect();
manager = {
    getUserByName: function (username, callback){
        connection.query("SELECT * FROM `users` WHERE name=?",[username], callback)
        connection.end;
    }
}
module.exports = manager;
/*connection.query("SELECT * FROM 'users' WHERE name=?", function(err, rows, fields) {
    if (err) throw err;

    console.log('The solution is: ', rows[0].solution);
});

connection.end();*/