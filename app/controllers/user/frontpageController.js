module.exports.getAction = function *() {

    if(!this.state.slider) {

        this.state.slider = true;

        yield this.render('frontpage');

        this.state.slider = false;

    } else {
        yield this.render('frontpage');

        this.state.slider = false;

    }
}