'use strict';

let router = require('koa-router')();


function checkRes(res){
    console.log(res)

}
// responds to /users and /users:id
router
    .get('/', function * (next){
        let selectedDates = [
            {
                id: 1,
                year: 2016,
                mounth: 3
            },
            {
                id: 2,
                year: 2018,
                mounth: 6
            },
            {
                id: 3,
                year: 2017,
                mounth: 6
            },
            {
                id: 4,
                year: 2015,
                mounth: 9
            },
        ]
        yield this.render('test',{selectedDates: selectedDates})
    })
    .post('/', function * (next){
        this.body = this.request.body;
    });

module.exports = router;