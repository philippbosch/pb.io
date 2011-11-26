---
layout: default
nav: skills
skills:
- [Android, http://www.android.com/]
- [Backbone, http://documentcloud.github.com/backbone/]
- [Callback, http://incubator.apache.org/projects/callback.html]
- [Canvas, http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html]
- [Celery, http://celeryproject.org/]
- [CoffeeScript, http://coffeescript.org/]
- [Compass, http://compass-style.org/]
- [CouchDB, http://couchdb.apache.org/]
- [CSS3, http://www.w3.org/TR/CSS/]
- [Django, http://www.djangoproject.com/]
- [Django CMS, http://www.django-cms.org/]
- [Flask, http://flask.pocoo.org/]
- [Git, http://git-scm.com/]
- [Google Maps API, http://code.google.com/apis/maps/documentation/javascript/]
- [HTML5, http://dev.w3.org/html5/spec/Overview.html]
- [iOS, http://developer.apple.com/devcenter/ios/index.action]
- [JavaScript, http://www.ecmascript.org/]
- [jQuery, http://jquery.com/]
- [jQTouch, http://jqtouch.com/]
- [Less Framework, http://lessframework.com/]
- [Linux, http://www.linux.org/]
- [Markdown, http://daringfireball.net/projects/markdown/]
- [Mercurial, http://mercurial.selenic.com/]
- [MySQL, http://www.mysql.com/]
- [Mobile Web Apps, http://webapps.io/]
- [nginx, http://nginx.org/]
- [node.js, http://nodejs.org/]
- [Phonegap, http://phonegap.com/]
- [PostgreSQL, http://www.postgresql.org/]
- [Python, http://python.org/]
- [Redis, http://redis.io/]
- [Ruby, http://www.ruby-lang.org/]
- [Sass, http://sass-lang.com/]
- [Sinatra, http://www.sinatrarb.com/]
- [three.js, https://github.com/mrdoob/three.js/]
- [WebGL, http://www.khronos.org/webgl/]
---

Skills
======

<ul class="skills">
    {% for skill in page.skills %}
        <li><a href="{{ skill[1] }}">{{ skill[0] }}</a></li>
    {% endfor %}
</ul>