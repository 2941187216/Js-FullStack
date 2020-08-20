## cookie
name
value
Domain: cookie 生效的域名 baidu.com map.baidu.com
path: 生效的路径 /a/b  /c  /a  /
expires: 过期时间 默认是session失效
httponly: cookie只在http中传输，js是无法操作的(cookie 可以由后端的set-cookie 响应头设置，也可以由js document.cookie设置)
secure：只在https的环境下生效
cookie只要符合 domain + path 的生效范围 就会随着http请求发送CSRF
samesite: lax strict(cookie只在同域生效) none

1.
samesite: lax localhost的某些get请求在zhaomeng.com发出也能带cookie
samesite: strict localhost 的请求 只有在 localhost发出才会带cookie
samesite: none localhost的get请求不管在什么域下发出都会携带cookie

2.
csrf_token: 随机生成
用户登录完 服务端 给你一个token
之后的请求都要携带这个token
对于 跨站的请求是没有token的

3，浏览器会给每个请求分配一个reffer字段，表明这个请求来源
    服务端就会检测这个来源