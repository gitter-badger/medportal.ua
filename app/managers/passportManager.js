'use strict';

let mysql      = require('mysql'),
    config = require('config'),
    connection = mysql.createConnection(config.database.master);

connection.connect();

let manager = {
    getUserByName: function (username, callback){
        connection.query("SELECT * FROM `users` WHERE name=?",[username], callback)
        connection.end;
    }
}
module.exports = manager;
