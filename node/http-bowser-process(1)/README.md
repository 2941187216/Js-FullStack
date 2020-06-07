## req
浏览器：xhr fetch
node：http.get()

不同xxx -> http  -> 一样

http：超文本传输

- xhr
```js
const xhr = new Xmlhttprequest();
xhr.setheader('Content-Type': 'application/json');
xhr.open('POST', 'api.com', true);
xhr.onload = function() {
  
}
xhr.send({a: 1, b: 2})
```

- 浏览器拼接报文
  http1.1 报文(纯文本)
  - 首行\r\n
  - 首部\r\n
  - \r\n
  - 实体\r\n

## 解析报文

split('\r\n');

限制：必须等到拿到一个完整的报文，
现实：报文传输，可以允许我们，分段传输
  

## 解析
FSM（finate，state， machine）
Infinity: 正无穷 负无穷 除法 

浏览器解析报文：body(html), headers, 响应行
html怎么渲染出来了？浏览器也要解析 html
js 怎么就被执行？浏览器 也要解析 js

解析成什么？


## 编译原理

代码都是字符串，
- 词法分析（分词）： 代码切割成一个个最小有效的单位
- 语法分词：栈，LL LR
- 生成目标代码

语文：
我今天很高兴   -> 我  今天  很  高兴
const net = require('net');  ->  const net = require 'net'
```js
function cal(str) {}
let str = '34 + 567 - 890'
1. 34 + 567 - 890
```

语法：
```js
{
  person: '我'
  time: '今天',
  do: '很高兴'
}
```
```
{
  statement: {
    type: 'class',
    loc: {
      row: 4,
      coloumn: 5
    },
    clssName: 'Xmlhttprequest',
    constructor: {
      type: 'function',
      functionName: ''
    }
  }
}
```

```jsx
<div>
  <span></span>
</div>
```


DOM 树， AST 抽象语法树
栈



## 浏览器 匹配css 规则

效率：**按照 css 选择器 从后往前匹配的**


## layout
毕生
display: flex | block | inline-block | grid
justify-content: center;
positon: 
float: 
...
用这些 对位置产生影响的元素，计算元素的位置信息，算出坐标系里面的 （x, y）

## 正常的文档流
脱离文档流：float：left position


## normal flow
行内元素（inline-level-box）: 水平从左往右一个接着一个布局, 垂直方向默认会以 baseLine 对齐
块级元素（block-level-box）: 垂直方向从上往下一个接着一个布局
relative 定位：


## flex
容器：
flex-direction: row / cloumn
justify-content: center/start/end
align-item: center/start/end
