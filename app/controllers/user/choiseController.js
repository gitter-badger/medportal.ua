'use strict';

let manager = require('../../managers/entryManager');


module.exports.postAction = function * (next) {
    let choise = {};
    for(let key in this.request.body){
        if(!this.request.body[key]){
            this.redirect('/entry')
        }
        choise[key] = this.request.body[key].replace('/\0/g', '0').replace('/\(.)/g', '$1').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#039;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    }

    yield manager.setEntry(choise.doctorId, choise.day, choise.time, choise.userName, choise.userPhone_number, choise.userEmail);
    this.redirect('/');
}