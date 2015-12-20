'use strict';

let manager = require('../managers/registrationManager');

module.exports.postAction = function * (next) {
    let userExist = yield manager.getUserForValid(this.request.body.username);
    console.log(userExist);
    if(userExist[0]){
        this.body = {username: userExist[0].name}
    }else{
        this.body = {};
    }


}