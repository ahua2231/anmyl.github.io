// 获取所有 .preview 元素
for (let img of document.querySelectorAll(".preview")) {
    img.addEventListener("click", ()=>{
        //创建预览器
        let container = document.createElement("div");
        container.classList.add("preview-container");
        container.onclick = function() {
            container.remove();
        }

        //创建预览图片
        let innerImg = document.createElement("img");
        innerImg.src = img.src;
        innerImg.classList.add("inage");

        //绑定滚动事件
        container.onwheel = function(event) {
            const width = getComputedStyle(innerImg).width.slice(0, -2);
            const height = getComputedStyle(innerImg).height.slice(0, -2);

            if (event.deltaY > 0) {
                //向上滚动放大
                innerImg.style.width = parseInt(width) * 1.1 + "px";
                innerImg.style.height = parseInt(height) * 1.1 + "px";
            } else if (event.deltaY < 0) {
                //向下滚动缩小
                innerImg.style.width = parseInt(width) * 0.9 + "px";
                innerImg.style.height = parseInt(height) * 0.9 + "px";
            }
        }

        //将图片添加到预览器
        container.append(innerImg);

        //将预览器添加到 body 中
        document.body.append(container);
    }
    )
}
