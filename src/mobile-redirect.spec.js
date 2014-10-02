describe("MobileRedirect tests", function() {

    var
        document,
        location,
        MobileDetect = function(userAgent) {

            var mobile = false, tablet = false;

            if(userAgent !== 'Desktop browser') {
                mobile = true;
                tablet = true;
            }

            return {
                mobile: function() { return mobile; },
                tablet: function() { return tablet; }
            }
        };



    beforeEach(function () {

        location = {
            replace: function() {}
        };

        spyOn(location, 'replace');
    });

    it('it redirects if you\'re on mobile', function() {

        MobileRedirect(MobileDetect, 'Mobile browser', document, location, { path: 'OK' });
        expect(location.replace).toHaveBeenCalled();
    });


    it('it doesn\t redirect if you\'re not on mobile', function() {

        MobileRedirect(MobileDetect, 'Desktop browser', document, location, { path: 'OK' });
        expect(location.replace).not.toHaveBeenCalled();
    });
});