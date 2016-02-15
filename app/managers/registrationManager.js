'use strict';

let query = require('mysql-query-promise');

let manager = {
    getLimitCompanies: function * (limit) {
        let qs = "SELECT * FROM `companies` LIMIT ?";
        return query(qs, [limit], 'master');
    },
    setUser: function * (newUser, today){

        let qs = "INSERT INTO `users`(`login`, `name`, `secondname`, `password`, `phone_number`, `birthday_date`, `email`, `registration_date`) VALUES ('" + newUser.username + "', '" + newUser.name + "', '" + newUser.secondname + "', '" + newUser.password + "', '" + newUser.phonenamber + "', '" + newUser.year + "-" + newUser.month + "-" + newUser.day + "', '" + newUser.email + "', '" + today + "');";
        return query(qs,[], 'master');
    },
    getUserForVerify: function * (id){
        let qs = "SELECT login, password FROM users WHERE user_id=? AND verify_email=0";
        return query(qs,[id], 'master');
    },
    dropNotVerifiedUsers: function * (){
        let qs = "DELETE FROM users WHERE verify_email=0 AND UNIX_TIMESTAMP() -    UNIX_TIMESTAMP(registration_date) > 86400";
        return query(qs, 'master')
    },
    updateVerifyEmailInUser: function * (id){
        let qs = "UPDATE `users` SET `verify_email`=1 WHERE user_id =?";
        return query(qs, [id], 'master')
    }

}
module.exports = manager;