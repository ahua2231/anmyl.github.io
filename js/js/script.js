// 导航栏项目数组
const navItems = [{
    label: 'Home',
    url: '#'
}, {
    label: 'About',
    url: '#'
}, {
    label: 'Services',
    url: '#'
}, {
    label: 'Contact',
    url: '#'
}];

// 动态创建导航栏
const createNav = ()=>{
    const navElement = document.getElementById('nav');

    navItems.forEach(item=>{
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = item.url;
        link.textContent = item.label;
        listItem.appendChild(link);
        navElement.appendChild(listItem);
    }
    );
}
;

// 页面加载完成后创建导航栏
document.addEventListener('DOMContentLoaded', createNav);
