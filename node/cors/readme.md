## 跨域
浏览安全策略

一个源向另外一个源发出请求
同源：同协议(http/https), 同域名, 同端口
两个源不相同：产生跨域

CORS: cross orign resources share

前后端分离部署， 前端有自己的域， 后端也有自己的域
## 1
Access-Control-Allow-Origin

## http 头
请求头:accept 
响应头:set-cookie
通用头:
Content-Type: 
- 请求的时候带给后端的内容的类型：text/plain, formdata, application/json
- 后端告诉前端我给的资源的类型:MIME

## 简单请求
跨域直接发出请求

## 非简单请求
- OPTION preflight /api
- POST /api