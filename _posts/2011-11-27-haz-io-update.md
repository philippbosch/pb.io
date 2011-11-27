---
layout: post
title: Major upgrade to haz.io
tags:
- haz.io
- html5
- css3
- features
- modernizr
---

It's been over four months that I launched [haz.io](http://haz.io/) back in July. Four months is a long time in web development nowadays, and quite a lot has changed in the browser space. To catch up with that I gave haz.io an overhaul today. haz.io has made use of all available tests in the default Modernizr build. And Modernizr did not have an official release for a while. But a whole bunch of [community add-ons](https://github.com/Modernizr/Modernizr/tree/master/feature-detects) have been contributed, and we are adding most of them to haz.io today.

<!--more-->

That means that you can now use haz.io to check your browser for support of:

### CSS

*   `background-repeat: round`
*   `background-repeat: space`
*   `background-size: cover`
*   `box-sizing`
*   `cubic-bezier()` values > 1.0 
*   `display: table`
*   `overflow-scrolling: touch` (momentum scrolling introduced with iOS 5)
*   `pointer-events`
*   `user-select`

### HTML5

*   `<details>` element
*   Device Motion Event
*   Device Orientation Event
*   File API
*   `<meter>` element
*   `<progress>` element
*   Shared Workers

### Miscellaneous

*   Cookies
*   Custom Protocol Handlers
*   data URIs
*   Emoji
*   Fullscreen API
*   WebP


Also a minor styling issue introduced with iOS 5 has been resolved.

Check out the updated [haz.io](http://haz.io/).
