// 轻量级的web 开发框架， js node 
const Koa = require('koa'); // 请求KOA
const app = new Koa();// web server
// 启动一个服务 函数可以封装一个服务
const fs = require('fs');
const func = ctx => {
    // console.log('func');
    // ctx.response.body = 'func';
    
}

const main = ctx  => {
    // 
    console.log(ctx.request, '-----------');
    // ctx.response.body = 'Hello World';
    // req response
    ctx.response.type = 'html';// 响应头
    // 分层 网站  大一点的网站  返回一个HTML文件
    const html = fs.readFileSync('./template.html','utf-8');
    // fs.readFile('./template.html','utf-8',function(err,data) {
    //     console.log(data,'+++++++');
    ctx.response.body = html;
    // })
    //console.log(html);
    
}
// app.use(func);
app.use(main); // 启用了一个服务  给访问者（request）使用
app.listen(3000);