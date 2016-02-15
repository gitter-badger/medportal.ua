'use strict';

let manager = require('../../managers/doctorManager');


module.exports.postAction = function * (next){
    let message,doctorName, doctors = [];




    switch(true){
        case this.request.body.doctorName.replace(/\s+/g, '').length == '':
            message = 'Ви не ввели ім’я лікаря!'
            break;
        case /(\s)|([!№;:<>?~`'"@#$%^&*()-+=\/|*,])/g.test(this.request.body.doctorName):
            message = 'Це поле не може містити пробіли, або знаки: !,№,;,:,<,>,?,~,`,\',",@,#,$,%,^,&,-,+,=,\/,|,*,(,),!,'
            break;
        default :

            doctorName = '%' + this.request.body.doctorName.replace('/\0/g', '0').replace('/\(.)/g', '$1').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#039;').replace(/</g, '&lt;').replace(/>/g, '&gt;') + '%';
            doctors  = yield manager.getDoctorsByDoctorName(doctorName);
            if(!doctors[0]){
                message = 'Лікаря з ім’ям "' + this.request.body.doctorName + '" не існує!'
            } else {
                message = 'Ви шукали "' + this.request.body.doctorName + '".'
            }
    }




    yield this.render('doctors', {doctors: doctors , message: message})
}