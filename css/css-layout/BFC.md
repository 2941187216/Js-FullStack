## 格式化上下文
koa: ctx === context
token: 泛指

## BFC
block-formatting-context
隔离的容器


## 新建一个 BFC
- float
- absolute
- display: inline-block || table-cell || table caption || flex || grid
- overflow 不为 visiable
- 根元素默认新建 BFC

## flex 布局
react-native 只支持 flex，RN 已经证明了 只用 flex 是可以很好完成布局

## float
文字环绕效果
float 用来布局了，清除float
clear: both (left, right)

## BFC规则
- 盒子在垂直方向上，从上往下布局
- 垂直方向上的距离是由margin决定，同一个BFC之内垂直方向上相邻块级元素的margin会折叠(留白，够了就行)
- 由于有float元素，一个盒子的大小可能会缩小，除非他新建BFC(overflow清除浮动)
- BFC 区域不会和 float 重叠(左侧固定，右侧自适应)

## layout
normal flow
position
float: 文字环绕
flex: