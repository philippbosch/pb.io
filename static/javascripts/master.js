(function($) {
    $(window).bind('hashchange', function(e) {
        if ($(window.location.hash).length) {
            $(window.location.hash).focus();
        }
    });
    
    
    $.elseWhereWidget = {
        'confg': {}
    };
    $.fn.elsewhereWidget = function(userConfig) {
        var config = $.extend({}, $.elseWhereWidget.config, userConfig),
            $bubble = $('<div class="bubble"/>').appendTo($(this)),
            $bubbleContent = $('<ul class="content"/>').appendTo($bubble);
        
        if (config['url'] && config['success']) $.ajax(config['url'], {
            'success': config['success'],
            'dataType': 'jsonp',
            'context': $bubbleContent
        });
    };
    
    $(document).ready(function() {
        $('#twitter').elsewhereWidget({
            'url': 'http://api.twitter.com/1/statuses/user_timeline/12158612.json?include_rts=0&count=5&callback=?',
            'success': function(data, status, xhr) {
                var profile = data[0].user,
                    $content = $(this);
                $.tmpl('<li class="item profile"><div class="service">me on Twitter: <a href="http://twitter.com/${name}" class="name">@${name}</a></div><div>${followers_count} followers</div><div>${friends_count} following</div><div>${statuses_count} tweets</div></li>', profile).appendTo($content);
                $.each(data, function(i, tweet) {
                    $.tmpl('<li class="item">{{html text_html}} <a href="http://twitter.com/${name}/${id}" class="created_at">${created_at}</a></li>', {'id': tweet.id_str, 'text_html': linkify(tweet.text), 'created_at': tweet.created_at.replace(/ \d{1,2}\:\d{1,2}\:\d{1,2} \+\d{4}/,',')}).appendTo($content);
                });
            }
        });
        $('#github').elsewhereWidget({
            'url': 'http://github.com/api/v2/json/user/show/philippbosch?callback=?',
            'success': function(data, status, xhr) {
                var profile = data.user,
                    $content = $(this);
                $.tmpl('<li class="item profile"><div class="service">me on GitHub: <a href="http://github.com/${login}" class="name">${login}</a></div><div>${public_repo_count} public repos</div><div>${public_gist_count} public gists</div></li>', profile).appendTo($content);
            }
        });
        $('#lastfm').elsewhereWidget({
            'url': 'http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%3D"http%3A%2F%2Fws.audioscrobbler.com%2F2.0%2Fuser%2Feyesbreaker%2Frecenttracks.xml"&format=json&callback=?',
            'success': function(data, status, xhr) {
                var tracks = data.query.results.recenttracks.track,
                    $content = $(this);
                $.each(tracks, function(i, track) {
                    $.tmpl('<li class="item"><img src="${image[0].content}"><div class="artist">${artist.content}</div><div class="title">${name}</div></li>', track).appendTo($content);
                });
            }
        });
        $('#xing').elsewhereWidget();
    });
    
})(jQuery);


function linkify(text) {
    text = text.replace(/(https?:\/\/[^\s\(\)]+)/gi, function (s) {
        return '<a href="' + s + '">' + s + '</a>';
    });
    
    text = text.replace(/(^|)@(\w+)/gi, function (s) {
        return '<a href="http://twitter.com/' + s + '">' + s + '</a>';
    });
    
    text = text.replace(/(^|)#(\w+)/gi, function (s) {
        return '<a href="http://search.twitter.com/search?q=' + s.replace(/#/,'%23') + '">' + s + '</a>';
    });
    return text;
}