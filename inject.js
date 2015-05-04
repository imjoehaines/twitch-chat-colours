var app = {};
console.info('twitch chat colours loaded');

$(function() {
  app.people = [
    {
      'name': 'jkolea',
      'colour': 'orange'
    }
  ];

  app.colours = {
    'orange': 'orange',
    'red': '#ff0000'
  };

  app.initialise = function() {
    console.info('initialise');

    setInterval(function() {
      app.doColouring(app.people);
    }, 500);
  };

  app.doColouring = function(people) {
    $(people).each(function() {
      var self = this;

      $('.from').filter(function() {
        return this.innerHTML.toLowerCase() === self.name.toLowerCase();
      }).css('color', app.colours[self.colour]);
    });
  };

  // start app
  console.info('start');
  app.initialise();
});
