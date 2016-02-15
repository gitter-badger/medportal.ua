module.exports.getAction = function * (){
    this.logout();
    this.redirect('/');
};