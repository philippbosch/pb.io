---
layout: post
title: Hello world
---

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum …

{% highlight "python" %}

from django.template.defaultfilters import slugify

def wrap_in_plugin_holder(instance, placeholder, rendered_content, context):
    classes = ['plugin-holder', slugify(instance.plugin_type)]
    instance.is_first_in_placeholder() and classes.append('first')
    instance.is_last_in_placeholder() and classes.append('last')
    return u'<div class="%s">%s</div>' % (" ".join(classes), rendered_content)

{% endhighlight %}

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
