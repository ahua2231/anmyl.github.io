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
// 路由处理函数
function handleRoutes() {
    const hash = window.location.hash.substring(1);
    // 获取URL中的哈希值
    let pageUrl = '';
    let pageTitle = '';

    switch (hash) {
    case '/page1':
        pageUrl = 'iframe-web/link.html';
        pageTitle = 'MIPAY-链接';
        break;
    case '/page2':
        pageUrl = 'iframe-web/image.html';
        pageTitle = 'MIPAY-VPAY-步骤图';
        break;
    case '/page3':
        pageUrl = 'iframe-web/Speech-skills.html';
        pageTitle = 'MIPAY-语录';
        break;
    default:
        pageUrl = 'iframe-web/link.html';
        // 默认加载第一页
        pageTitle = 'MIPAY-链接';
    }

    // 发起 Ajax 请求获取页面内容
    fetch(pageUrl).then(response=>{
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    }
    ).then(data=>{
        // 设置 iframe 的内容为 Ajax 获取的页面内容
        document.getElementById('contentFrame').srcdoc = data;
        // 设置页面标题
        document.title = pageTitle;
    }
    ).catch(error=>{
        console.error('Error fetching page:', error);
    }
    );
}

// 页面加载完成时立即执行一次路由处理函数
document.addEventListener('DOMContentLoaded', handleRoutes);

// 监听URL的变化，并在变化时执行路由处理函数
window.addEventListener('hashchange', handleRoutes);
