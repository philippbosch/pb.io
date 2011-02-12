---
layout: post
title: Consume iCalendar data as JSON
---

While building this website I wanted to incorporate an overview of conferences that I'm going to. The data is already out there at [Lanyrd](http://lanyrd.com/people/philippbosch) but unfortunately there is no API yet. There are [badges](http://lanyrd.com/services/badges/) available to embed in your site but that didn't cut it for me. 

I then saw that they are offering iCalendar files on the [calendar page](http://lanyrd.com/calendar/yours/) (in the end it turned out not to be what I want because this data also includes conferences that I'm *tracking* and not only those I'm *attending*, but that's another story). Maybe I could take advantage of this somehow using [YQL](http://developer.yahoo.com/yql/). Turns out you can consume Atom, RSS, CSV, and tons of other formats, but no luck with iCalendar data.

So I sat down and put together a tiny web service that pulls in iCalendar data from a URL and converts it to JSON. Here's how to use it:

`http://ical2json.pb.io/the-website.com/path/to/file.ics`

<!--more-->

So for example let's take some events from [Last.fm](http://www.last.fm/). They provide iCalendar data at URLs like this: `http://ws.audioscrobbler.com/1.0/artist/Shout+Out+Louds/events.ics`.

To get this data in JSON format use a URL like this: `http://ical2json.pb.io/ws.audioscrobbler.com/1.0/artist/Shout+Out+Louds/events.ics`

The response will look like this:

{% highlight javascript %}
{
  'VCALENDAR': {
    'VEVENT': [
      {
        'DTSTAMP': "20110328T203000", 
        'UID': "LFMEVENT-1748422", 
        'URL': "http://www.last.fm/event/1748422+Shout+Out+Louds+at+La+Machine+du+Moulin+Rouge+on+28+March+2011", 
        'SUMMARY': "Shout Out Louds at La Machine du Moulin Rouge", 
        'LOCATION': "La Machine du Moulin Rouge, Paris, France", 
        'DTEND': "20110328T235900", 
        'DTSTART': "20110328T203000", 
        'GEO': "2.332258;48.884008", 
        'DESCRIPTION': "Shout Out Louds\n\nhttp://www.last.fm/event/1748422+Shout+Out+Louds+at+La+Machine+du+Moulin+Rouge+on+28+March+2011"
      }, 
      {
        'DTSTAMP': "20110329T203000", 
        'UID': "LFMEVENT-1755031", 
        'URL': "http://www.last.fm/event/1755031+Shout+Out+Louds+at+La+Nef+on+29+March+2011", 
        'SUMMARY': "Shout Out Louds + Hello Bye Bye at La Nef", 
        'LOCATION': "La Nef, Angoul\u00eame, France", 
        'DTEND': "20110329T235900", 
        'DTSTART': "20110329T203000", 
        'GEO': "0.130579;45.640423", 
        'DESCRIPTION': "Shout Out Louds, Hello Bye Bye\n\nhttp://www.last.fm/event/1755031+Shout+Out+Louds+at+La+Nef+on+29+March+2011"
      }
      // …
    ], 
    'VERSION': "2.0", 
    'X-WR-CALNAME': "Last.fm Events", 
    'PRODID': "-//Last.fm Limited Event Feeds//NONSGML//EN", 
    'X-WR-CALDESC': "Event listing - supplied by http://www.Last.fm"
  }
}
{% endhighlight %}

Of course there's also support for JSON-P callbacks (?callback=foo).

The source and some documentation can be found on [GitHub](http://github.com/philippbosch/ical2json).