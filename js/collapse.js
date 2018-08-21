$(function() {

    function collapse() {
        var elem = $('.news-archive__years');
        var ignore = 1;
        elem.find('li').each(function(i) {
            if(i >= ignore) {
                $(this).addClass('news_archive__row_hidden');
            }
        }); 
        var elem = $('.news-archive__collapse');
        elem.html(elem.html().replace("свернуть все","показать все"));

        $('.icon-collapse svg').removeClass('icon-collapse_reverse');
    }

    function expand() {
        var elem = $('.news-archive__years');
        elem.find('li').each(function(i) {
            $(this).removeClass('news_archive__row_hidden');
        });
        
        var elem = $('.news-archive__collapse');
        elem.html(elem.html().replace("показать все","свернуть все"));

        $('.icon-collapse svg').addClass('icon-collapse_reverse');
    }

    function updateState(state) {
        state ? collapse() : expand();
    }

    var collapsed = true;
    updateState(collapsed);
    $('.news-archive__collapse').on('click', function() {
        collapsed = !collapsed;
        updateState(collapsed);
    });

    $('.news-archive__anchor').on('click', function(){
        collapsed = false;
        updateState(collapsed);
    });
});