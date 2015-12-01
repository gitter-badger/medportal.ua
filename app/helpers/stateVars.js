'use strict';

let manager = require('../managers/localsManager');

module.exports = function * stateVars(){
        var state = {};
        state.doctorNav = yield manager.navSpesialisations();
        state.companySlider = yield manager.sliderCompanies();
        state.slider = false;
        return state;
    };


