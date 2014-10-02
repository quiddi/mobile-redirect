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