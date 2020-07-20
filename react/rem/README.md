em: 相对于自己的 font-size
rem: html的font-size

1. font-size 多少
2. 如何由设计稿快速还原

DPR: device piex ratio 设备真实的像素 / 1px
css 1px 在不同的设备上 渲染出来的像素是不一样的 2px(ip6)

想要 1px
1. meta init-scale: 0.5 所有的元素缩小0.5倍
    写元素宽高 按照扩大两倍之后的写
    一个元素 本来 20*20
    必须写成 40*40
    所以我们的设计稿就需要扩大两倍 量的尺寸就是扩大两倍的尺寸

2. 等比缩放
    屏幕划分 10 等分
    750 / 10 = 75
    1125 / 10 = 112.5
    一份就是 1rem, html: font-size 75px 或者是 112.5px