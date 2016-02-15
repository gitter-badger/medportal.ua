'use strict';

module.exports = function (router){
    return function * (next){
        this.state.router = router;
        yield next;
    }
}

