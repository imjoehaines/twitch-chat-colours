describe('inject.js', function() {
    describe('initialise', function() {
        it('should make an ajax call', function() {
            spyOn($, 'get');
            app.initialise();

            expect($.get).toHaveBeenCalled();
        });
    });
});
