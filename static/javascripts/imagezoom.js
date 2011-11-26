(function($) {
    $(document).ready(function() {
        $('p:has(a.lightbox)').each(function(i,el) {
            $('a.lightbox', this).attr('rel', 'group-' + i);
        });
        $('a.lightbox').fancybox({
            padding: 0,
            hideOnContentClick: true,
            overlayColor: '#FFF',
            overlayOpacity: 0.8,
            transitionIn: 'fade',
            transitionOut: 'fade',
            showNavArrows: false,
            showCloseButton: false
        });
    });
})(jQuery);
