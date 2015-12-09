'use strict';

let manager = require('../managers/localsManager');

module.exports = function * stateVars(self){
        let state = {};
        if(self.session.passport) {
                if (self.session.passport.user) {
                        self.state.session = true;
                        console.log(self.session.passport.user);
                } else {
                        self.state.session = false;
                }
        } else {
                self.state.session = false;
        }
        self.state.doctorNav = yield manager.navSpesialisations();
        self.state.companySlider = yield manager.sliderCompanies();
        self.state.slider = false;
        return self;
    };


