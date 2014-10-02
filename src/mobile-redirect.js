/*jslint evil: true */

var MobileRedirect = function(MobileDetect, userAgent, document, location, extend) {

    "use strict";

    var
        config = {
            expression: 'mobile || tablet',
            path: '',
            domain: ''
        },
        expression,
        items,
        detector = new MobileDetect(userAgent),
        result;

    if(document && document.currentScript) {
        config.path = document.currentScript.getAttribute('data-mobile-path');
        config.domain = document.currentScript.getAttribute('data-mobile-domain');
    }

    if (extend && typeof extend === 'object') {
        for (var attr in config) {
            if (config.hasOwnProperty(attr) && extend.hasOwnProperty(attr) && config[attr] !== extend[attr]) {
                config[attr] = extend[attr];
            }
        }
    }

    items = config.expression.match(/\w+/g);
    expression = config.expression;

    for(var i in items) {

        if(items.hasOwnProperty(i)) {

            expression = expression.replace(new RegExp(items[i], 'g'), 'detector[\'' + items[i] + '\']()');
        }
    }

    result = eval(expression);

    if(result) {

        if(config.path || config.domain) {

            location.replace((config.domain || location.origin) + '/' + config.path + location.pathname);
        }
    }
};

if (typeof define === "function" && define.amd) {

    define("MobileRedirect", [ 'MobileDetect', 'window', 'document', 'location' ], function(MobileDetect, window, document, location) {
        return MobileRedirect(MobileDetect, window.navigator.userAgent, document, location);
    });
}
else {
    window.MobileRedirect = MobileRedirect;
    if(typeof MobileDetect === "function") {
        window.MobileRedirect(MobileDetect, window.navigator.userAgent, document, location);
    }

}