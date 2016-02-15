'use strict';

let manager = require('../managers/localsManager');

module.exports = function * stateVars(self){

        self.state.router = '';
        if(self.session.passport) {
                if (self.session.passport.user) {
                        self.state.session = true;
                } else {
                        self.state.session = false;

                }
        } else {
                self.state.session = false;
        }
        self.state.doctorNav = yield manager.navSpasialisations();

        self.state.companySlider = yield manager.sliderCompanies();

        self.state.companyCities = yield manager.getCompaniesCities();

        self.state.slider = false;
        return self;
    };


