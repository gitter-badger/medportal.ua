requirejs.config({
    paths: {
        'jquery': 'lib/jquery',
        'bootstrap': 'lib/bootstrap.min'
    },
    shim: {
        'bootstrap':{deps: ['jquery']}
    }
});

require(['jquery', 'bootstrap', 'carusel'], function($, _bootstrap, carusel){
        console.log()
});


