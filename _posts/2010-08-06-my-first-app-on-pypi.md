---
layout: post
title: "My first app on PyPI: django-tellafriend"
---

I should have done this much earlier, but a few minutes ago I uploaded my first Django app to [PyPI](http://pypi.python.org/), the Python Package Index a.k.a. *«The Cheese Shop»*. The app itself is nothing more than a simple tell-a-friend functionality that I extracted from [some client project](http://polygonbaby.com/).

While writing the `setup.py` file (which was really easy in the end) I found [this tutorial](http://packages.python.org/an_example_pypi_project/setuptools.html) to be very helpful. The most exciting and surprising part was that `python setup.py register` is all you need to do to register the package with PyPI, and `python setup.py sdist upload` to create a source distribution and upload it. After that it's only a matter of `pip install django-tellafriend` for anyone to install the app.

And as if that was not already enough new insights for today, I even created some [basic documenation](http://philippbosch.github.com/django-tellafriend/) using [Sphinx](http://sphinx.pocoo.org/). Woohoo!

The app does not (yet) have its own page on this site, but the source is available on [GitHub](http://github.com/philippbosch/django-tellafriend) and on [PyPI](http://pypi.python.org/pypi/django-tellafriend).