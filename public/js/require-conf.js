requirejs.config({
    paths: {
        'jquery': 'lib/jquery',
        'bootstrap': 'lib/bootstrap.min'
    },
    shim: {
        'bootstrap':{deps: ['jquery']}
    }
});