define('jquery', 'bootstrap', function($, _bootstrap){
    console.log('dgfdg');
    window.onload = function(){

        $('#myTab a').click(function (e) {
            e.preventDefault()
            $(this).tab('show')
        })
    }
})