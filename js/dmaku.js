$(function() {

    // nav收缩展开
    $('.nav-item>a').on('click', function() {
        if (!$('.nav').hasClass('nav-mini')) {
            if ($(this).next().css('display') == "none") {
                //展开未展开
                $('.nav-item').children('ul').slideUp(300);
                $(this).next('ul').slideDown(300);
                $(this).parent('li').addClass('nav-show').siblings('li').removeClass('nav-show');
                $('#content').css('margin-left', '220px');

                // Load content when a menu item is clicked
                var contentKey = $(this).attr('data-content');
                if (contentKey) {
                    loadContent(contentKey);
                }
            } else {
                //收缩已展开
                $(this).next('ul').slideUp(300);
                $('.nav-item.nav-show').removeClass('nav-show');
                $('#content').css('margin-left', '60px');
            }
        }
    });
    // nav-mini切换
    $('#mini').on('click', function() {
        if (!$('.nav').hasClass('nav-mini')) {
            $('.nav-item.nav-show').removeClass('nav-show');
            $('.nav-item').children('ul').removeAttr('style');
            $('.nav').addClass('nav-mini');
            $('#content').css('margin-left', '60px');
        } else {
            $('.nav').removeClass('nav-mini');
            $('#content').css('margin-left', '220px');
        }
    });
});
var pagePaths = ['iframe-web/index.html', 'iframe-web/image.html', 'iframe-web/link.html', 'iframe-web/Speech-skills.html'];

function changePage(index) {
    document.getElementById('contentFrame').src = pagePaths[index];
}
