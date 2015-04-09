$(function(){
    var colours = {
        'orange': 'orange',
        'yellow': 'yellow',
        'blue': 'skyblue',
        'pink': 'magenta',
        'purple': 'purple',
        'rainbow': 'red'
    };

    var people = [
        {
            'name': 'Nightbot',
            'colour': 'orange'
        },
        {
            'name': 'Immortalsnow',
            'colour': 'blue'
        },
        {
            'name': 'Tigerlivs',
            'colour': 'pink'
        },
        {
            'name': 'a',
            'colour': 'yellow'
        },
        {
            'name': 'e',
            'colour': 'pink'
        }
    ];

    setInterval(function() {
        $(people).each(function() {
            $('.from:contains("' + this.name + '")').css('color', colours[this.colour]);
        });

        console.log("tick");
    }, 500);
});
