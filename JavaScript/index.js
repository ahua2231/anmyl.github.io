layui.use(['element', 'jquery'], function() {
    const element = layui.element;
    const $ = layui.jquery;
    const loading = $('#loading');
    const body = $('.layui-body');
    const logo = $('.layui-logo');

    $('.layui-nav-child').on('click', 'dd', function() {
        const url = $(this).children('a').attr('href').substring(1);
        const title = $(this).text();
        navigateTo(url, title);
        updateHeader(title);
        return false;
    });

    function updateHeader(title) {
        logo.html('<img src="favicon.ico">' + title);
    }

    function loadPage(url, title) {
        showLoading();
        $.get(url, function(data) {
            body.html(data);
            element.render();
            document.title = title;
            hideLoading();
        });
    }

    function showLoading() {
        loading.css('display', 'block');
    }

    function hideLoading() {
        loading.css('display', 'none');
    }

    function loadInitialPage() {
        const hash = window.location.hash.substring(1);
        const pages = {
            '/page1': {
                url: 'index/link.html',
                title: 'MIPAY-链接'
            },
            '/page2': {
                url: 'index/image.html',
                title: 'MIPAY-图片'
            },
            '/page3': {
                url: 'index/Quotes.html',
                title: 'MIPAY-语录'
            }
        };
        const {url, title} = pages[hash] || {
            url: 'index/link.html',
            title: 'MIPAY-链接'
        };
        loadPage(url, title);
    }

    loadInitialPage();
    window.addEventListener('hashchange', loadInitialPage);

    function navigateTo(url, title) {
        window.location.hash = url;
    }
});
