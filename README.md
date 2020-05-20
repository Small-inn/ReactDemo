# ReactDemo
学习React的一些demo

## 高清布局代码
 // flex模式
```
<script>!function(e){function t(a){if(i[a])return i[a].exports;var n=i[a]={exports:{},id:a,loaded:!1};return e[a].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var i={};return t.m=e,t.c=i,t.p="",t(0)}([function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=window;t["default"]=i.flex=function(e,t){var a=e||100,n=t||1,r=i.document,o=navigator.userAgent,d=o.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i),l=o.match(/U3\/((\d+|\.){5,})/i),c=l&&parseInt(l[1].split(".").join(""),10)>=80,p=navigator.appVersion.match(/(iphone|ipad|ipod)/gi),s=i.devicePixelRatio||1;p||d&&d[1]>534||c||(s=1);var u=1/s,m=r.querySelector('meta[name="viewport"]');m||(m=r.createElement("meta"),m.setAttribute("name","viewport"),r.head.appendChild(m)),m.setAttribute("content","width=device-width,user-scalable=no,initial-scale="+u+",maximum-scale="+u+",minimum-scale="+u),r.documentElement.style.fontSize=a/2*s*n+"px"},e.exports=t["default"]}]);
flex(100, 1);</script>
```
## 使用方法
 1.只需要把上面的js代码放到head里面就行了。
 2.将设计师给你的效果图（效果图的宽度一般情况下只有三种，640px, 750px, 1442px，
    如果你的效果图属于前两种，那就直接按照效果图上标注的尺寸来布局，
    如果属于第三种，你可能需要把你的效果图宽度等比例缩放至812之后再按照上面标注的尺寸来布局
    第三种之所以这样，是因为此宽度是按照 Iphone 6 Plus 的尺寸给的，此设备的css宽度为414，dpr为3，
    所以它的物理像素宽度为 414 * 3 = 1242。而我们的这个高清布局代码默认 1rem=100px，设备对应的 dpr=2,
    这也就是为什么宽度为640，750的效果图为什么可以直接在上面量取尺寸的原因，
    就是因为640是按照 Iphone 5 的尺寸来的（设备的css宽度为320，dpr=2, 320 * 2 = 640)
    而750是按照 Iphone 6 的尺寸来的（设备的css 宽度为 375，dpr=2, 375 * 2 = 750)
    ）
    然后量取效果图上的元素尺寸，用rem做单位进行布局
    比如你量取某个元素宽35px，样式写为width: 0.35rem。