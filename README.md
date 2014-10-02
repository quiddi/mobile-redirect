mobile redirect
===============

[![Build Status](https://travis-ci.org/quiddi/mobile-redirect.svg?branch=master)](https://travis-ci.org/quiddi/mobile-redirect)

Basic usage
-----------

Small js lib that redirects to mobile page. It assumes that if you have desktop page: http://example.com/contact,
it'll redirect to http://example.com/mobile/contact if you use it like this:

```html
<script src="/bower_components/mobile-detect/mobile-detect.js"></script>
<script src="/js/mobile-redirect.js" data-mobile-path="mobile"></script>
```

You can also override domain i.e. http://m.example.com/contact by using this code:

```html
<script src="/bower_components/mobile-detect/mobile-detect.js"></script>
<script src="/js/mobile-redirect.js" data-mobile-domain="http://m.example.com"></script>
```

or you can use both:

```html
<script src="/bower_components/mobile-detect/mobile-detect.js"></script>
<script src="/js/mobile-redirect.js" data-mobile-path="mobile" data-mobile-domain="http://m.example.com"></script>
```

this code will redirect to: http://m.example.com/mobile/contact (although it doesn't make sense).

Installation
------------

```bash
bower install mobile-redirect --save
```

On your desktop page add this at the end of the ```<body></body>```:
```html
<script src="/bower_components/mobile-detect/mobile-detect.js"></script>
<script src="/bower_components/mobile-redirect/mobile-redirect.js" data-mobile-path="mobile"></script>
```
