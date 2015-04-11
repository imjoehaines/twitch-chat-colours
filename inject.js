var app = {};

$(function(){
    app.initialise = function() {
        $.get('test.json', function(data) {
            
        }, 'json');
    };
});
