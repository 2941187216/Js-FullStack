## req
浏览器: xhr fetch
node: http.get()

xxx -> http -> 一样

http: 超文本传输

- xht
- 浏览器拼接报文
  http1.1 报文(纯文本)
- 首行
- 首部
- \r\n
- 实体

## 解析报文
split('\r\n');

限制: 必须等到拿到一个完整的报文
现实: 报文传输，可以允许我们分段传输

## 解析
FSM(finite state machine) 有限状态机
Infinity: 正无穷 负无穷

浏览器解析报文：body(html) headers 响应行
HTML渲染？浏览器也要解析HTML
js 怎么就被执行？ 浏览器也要解析
解析成什么？

## 编译原理
代码都是字符串
- 词法分析(分词): 把代码切割成一个个最小的单位
- 语法分析: DOM树 栈 LL LR
  1：遇到开始标签入栈，同时把这个标签最作为栈顶元素的字节点
  2：遇到结束标签就 出栈
- 生成目标代码

## 浏览器 匹配css 规则
按照css选择器从后往前匹配，保障效率

## layout
display: flex | block | inline-block | grid
position: 
float:
justify-content: center;
... 
用这些 对位置产生影响的元素，计算元素的位置信息，算出坐标系里面的（x，y）

## 正常的文档流
脱离文档流：float: left position

## normal flow
行内元素(inline-level-box): 水平从左往右一个接着一个布局, 垂直方向默认会以baseline对齐
块级元素(block-level-box): 垂直方向从上往下一个接着一个布局
relative 定位：