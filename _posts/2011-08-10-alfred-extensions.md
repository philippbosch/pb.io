---
layout: post
title: Some Alfred extensions
tags:
- alfred
- launcher
- extensions
---

For a few months now I have been a huge fan of [Alfred](http://www.alfredapp.com/), the super smart application launcher (and more) for Mac OS X. After having used [Quicksilver](http://qsapp.com/), [Butler](http://manytricks.com/butler/) and [LaunchBar](http://www.obdev.at/products/launchbar/) before, I now feel at home with Alfred. 

With the latest release (0.9.9) came a long-awaited feature: [extensions](http://blog.alfredapp.com/2011/07/31/alfred-0-9-9-brings-extensions-new-free-theme/)! Before you were already able to create custom queries – something like `jq foo` being translated into a URL like `http://docs.jquery.com/Special:Search?search=foo` that is then opened in your browser. And that was already cool. But now you can create custom extensions that trigger Shell Scripts, AppleScripts, Automator Workflows, etc. And it could not be easier. What's even cooler is that you can easily import others' extensions or export yours and share them with others.

I have recently created a few extensions for myself which I want to share with you here. Maybe there's something useful in it for you.

<!--more-->

----------------------------------------------------------------

### Generate Password

Generate a random password (12 characters long) and copy it to the clipboard.

Keyword: `password`  
Download: [stuff.pb.io/9C2V](http://stuff.pb.io/9C2V)

----------------------------------------------------------------

### Free Space

Calculate the free space on your hard disk and display it in a Growl notification.

Keyword: `space`  
Download: [stuff.pb.io/9BWL](http://stuff.pb.io/9BWL)

----------------------------------------------------------------

### URL Encode

Replace special characters in the given string using the `%xx` escape suitable for using in a URL and copy the resulting string to the clipboard.

Keyword: `urlencode`  
Example: `urlencode some text with sp€ciäl çhåráctêrs`  
Output: `some+text+with+sp%E2%82%ACcia%CC%88l+c%CC%A7ha%CC%8Ara%CC%81cte%CC%82rs`  
Download: [stuff.pb.io/9BvD](http://stuff.pb.io/9BvD)

----------------------------------------------------------------

### Say

Read the given string out loud.

Keyword: `say`  
Example: `say Hello world`  
Download: [stuff.pb.io/9BaK](http://stuff.pb.io/9BaK)

----------------------------------------------------------------

### Work On

This one is probably a bit specific to my workflow but may give you
some ideas on how to create a similar extension for your needs.

Open a new terminal, activate virtual environment (Python), start 
development server, start [`compass watch`](http://compass-style.org/), 
open the corresponding folder in TextMate and open the local website 
in the browser. This extensions makes some assumptions that probably 
do not hold true for you:

* I'm using [iTerm2](http://www.iterm2.com/) instead of the OSX 
  Terminal.app
* I'm developing in Python and using 
  [virtualenv](http://pypi.python.org/pypi/virtualenv) and 
  [virtualenvwrapper](http://www.doughellmann.com/projects/virtualenvwrapper/)
* I'm making use of virtualenvwrapper's `postactivate` hook to 
  initiate a [screen](http://www.gnu.org/s/screen/)/[byobu](https://launchpad.net/byobu) 
  session that in turn opens virtual terminals with the development 
  server, `compass watch`, etc.
* I have my project sources in `~/Sites/projectname`
* I have my development server running at `http://projectname:8000/` 
  (doing this using [ghost](https://github.com/bjeanes/ghost)).

Keyword: `workon`  
Example: `workon myproject`  
Download: [stuff.pb.io/9D88](http://stuff.pb.io/9D88)  
Source: [gist.github.com/1139327](https://gist.github.com/1139327)

----------------------------------------------------------------

I will try to update this post when I create new extensions. Many more helpful extensions can be found on the [Alfred blog](http://blog.alfredapp.com/2011/08/02/alfred-extensions/).

**Update 1 (2011-08-11):**  
«Work On» extension added. 