const http = require('http');
http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Expose-Header':'Access-Control-Allow-Origin',
        'Access-Control-Allow-Origin':'http://localhost:8080',
        'Access-Control-Allow-Methods':'*',
        'Access-Control-Allow-Max-Age':-1,//preflight 预检请求结果缓存的时间
        'Access-Control-Allow-Headers':'content-type,X-Requested-With',
        'Access-Control-Allow-Credentials': true // cookie 凭证，允许前端请求携带cookie
    })
    // cookie: localstorage, cookie 随着http请求头 自动发送
    let posts = ['js', 'php'];
    res.end(JSON.stringify(posts));
})
.listen(9090, () => {
    console.log(9090);
});