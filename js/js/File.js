$(document).ready(function() {
    $('#toggleButton').click(function() {
        $('.sidebar').toggleClass('collapsed');
    });
});
$(document).ready(function() {
    var navItems = [{
        label: '导航项 1',
        url: '../index/quotes.HTML'
    }, {
        label: '导航项 2',
        url: '../index/image.HTML'
    }, {
        label: '导航项 3',
        url: '../index/limit.HTML'
    }];

    $('.nav-item').click(function() {
        var index = $(this).index();
        var url = navItems[index].url;
        $('#iframeContent').attr('src', url);
    });
});
