---
layout: post
title: Cross-browser RGBA background colors
---

For a website I'm currently working on I needed a way to have an image and on top of that a text box with a partly transparent background color. I didn't want to use any hacks with AlphaImageLoader and stuff but preferred a pure CSS solution. And I found a nice one, I think.

First, this is what the designer wanted it to look like:

![Website header design](http://media.pb.io/posts/2010-07-26-cross-browser-rgba-background-colors-01.jpg)

The problem is the partly-transparent background of the tabs and the darker section with the inactive tab titles. For modern Browsers that's just a matter of `background-color: rgba(134,161,11,0.6);`. But of course Internet Explorer is a bit late to the party and does not support this. 

<!--more-->

So I stumpled upon an [article by Erig Eggert](http://yatil.de/Weblog/cross-browser-rgba) (sorry, German only) where he describes an approach using a gradient `filter`. The thing is that this filter allows not only opaque but also partly-transparent colors to be used. Use the same non-opaque color twice for start and end color and you effectively have a partly-transparent area. The syntax is as follows:

{% highlight css %}
filter:progid:DXImageTransform.Microsoft.gradient(
    startColorstr=#9986A10B,endColorstr=#9986A10B);
{% endhighlight %}

The values for `startColorstr` and `endColorstr` consist of two parts (after the `#`): the first – `99` – is the alpha transparency (0.6 * 255 = 153, in hexadecimal: 99), the second – `86A10B` – is the hexadecimal representation of the color's RGB values (161, 161, 11). That's it.

Combine this with the RGBA version and maybe a opaque fallback, and you get this:

{% highlight css %}
background-color: #86A10B;
background-color: rgba(134,161,11,0.6);
background-color: transparent\9; /* reset the background color in IE only */
filter: progid:DXImageTransform.Microsoft.gradient(
    startColorstr=#9986A10B,endColorstr=#9986A10B);
zoom: 1; /* trigger hasLayout in IE6 */
{% endhighlight %}

As I'm using [Compass](http://compass-style.org/) in this project I put this in a small mixin:

{% highlight sass %}
@mixin rgba-background($color, $opacity) {
    background-color: $color;
    background-color: rgba($color, $opacity);
    background-color: transparent\9;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#{'#'+hex(round($opacity*255)) + '' + hex(red($color)) + '' + hex(green($color)) + '' + hex(blue($color))},endColorstr=#{'#'+hex(round($opacity*255)) + '' + hex(red($color)) + '' + hex(green($color)) + '' + hex(blue($color))});
    zoom: 1;
}
{% endhighlight %}

In order to make this work we need to add a `hex()` function to SASS which you can for example put inside of your `config.rb`. The code is this:

{% highlight ruby %}
module Sass::Script::Functions
  def hex(decimal)
    Sass::Script::String.new("%02x" % decimal)
  end
end
{% endhighlight %}

**Update:** The site is online now and you can see this technique in action at [Universum Group](http://www.universum-group.de/).