---
layout: post
title: django-geoposition – a tiny app to store geopositions in Django models
tags:
- django
- geo
- geoposition
- map
---

Yesterday I was looking for a simple way to add a geoposition (latitude and longitude) field to a Django model without the whole [GeoDjango aka django.contrib.gis](http://docs.djangoproject.com/en/dev/ref/contrib/gis/) hassle but unfortunately was not successful. The approaches I found were either too minimal, overloaded or outdated. So I came up with a simple solution myself. 

May I present to you: **django-geoposition**.

<!--more-->

### Installation

Say you want to store a geoposition in one of your models. It's three simple steps:

**Step #1**  
Add `geoposition` to your `INSTALLED_APPS`.

**Step #2**  
Add a `GeopositionField` to one of your models.  

{% highlight python %}
from django.db import models
from geoposition.fields import GeopositionField

class PointOfInterest(models.Model):
    name = models.CharField(max_length=100)
    position = GeopositionField()
{% endhighlight %}

**Step #3**  
There is no step #3.


### Usage

Also very simple:
{% highlight python %}
>>> from myapp.models import PointOfInterest
>>> poi = PointOfInterest.objects.get(id=1)
>>> poi.position
Geoposition(52.522906,13.41156)
>>> poi.position.latitude
52.522906
>>> poi.position.longitude
13.41156
{% endhighlight %}


### Widget

If used in a form (e.g. in the admin) the field is displayed together with a Google Maps widget looking like this:

![Screenshot](http://django-geoposition.readthedocs.org/en/latest/_images/geoposition-widget-admin.jpg)


… and that's basically it.

The source is on [GitHub](http://github.com/philippbosch/django-geoposition) and [PyPI](http://pypi.python.org/pypi/django-geoposition). Basic documentation is available on [Read the docs](http://django-geoposition.rtfd.org/).