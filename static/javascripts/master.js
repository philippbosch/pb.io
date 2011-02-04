(function($) {
    $.fn.elsewhereWidget = function(config) {
        var $bubble = $('<div class="bubble"/>').appendTo($(this)),
            $bubbleContent = $('<ul class="content"/>').appendTo($bubble);
        
        $.ajax(config['url'], {
            'success': config['success'],
            'dataType': 'jsonp',
            'context': $bubbleContent
        });
    };
    
    $(document).ready(function() {
        $('#elsewhere .twitter').elsewhereWidget({
            'url': 'http://api.twitter.com/1/statuses/user_timeline/12158612.json?include_rts=0&count=10&callback=?',
            'success': function(data, status, xhr) {
                var profile = data[0].user,
                    $content = $(this);
                $.tmpl('<li class="item profile"><a href="http://twitter.com/${name}" class="name">@${name}</a><div>${followers_count} followers</div><div>${friends_count} following</div><div>${statuses_count} tweets</div></li>', profile).appendTo($content);
                $.each(data, function(i, tweet) {
                    $.tmpl('<li class="item">{{html text_html}} <a href="http://twitter.com/${name}/${id}" class="created_at">${created_at}</a></li>', {'id': tweet.id_str, 'text_html': linkify(tweet.text), 'created_at': tweet.created_at.replace(/ \d{1,2}\:\d{1,2}\:\d{1,2} \+\d{4}/,',')}).appendTo($content);
                });
            }
        });
        $('#elsewhere .github').elsewhereWidget({
            'url': 'http://github.com/api/v2/json/user/show/philippbosch?callback=?',
            'success': function(data, status, xhr) {
                var profile = data.user,
                    $content = $(this);
                $.tmpl('<li class="item profile"><a href="http://github.com/${login}" class="name">${login}</a><div>${public_repo_count} public repos</div><div>${public_gist_count} public gists</div></li>', profile).appendTo($content);
            }
        });
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