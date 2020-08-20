// const Koa = require('koa');
// const path = require('path');
// const router = require('koa-router')();
// const app = new Koa();

// let count = 10000;

// router.get('/', async (ctx) => {
//   const fs = require('fs');
//   const html = fs.readFileSync('./index.html', 'utf-8')
//   ctx.cookies.set('login', 'hahaha', { 'sameSite': 'lax' });
//   ctx.body = html;
// })
// router.get('/transfer', async (ctx) => {
 
// })
// router.get('/count', async (ctx) => {
//   ctx.body = count;
// })

// app
//   .use(router.routes())
//   .use(router.allowedMethods());

// app.listen(9090, () => {
//   console.log('server is running 9090');
// });

const http = require('http');
const fs = require('fs');
// 用户登录状态的保持
// 1: 第一次登录完后  后端写入一个cookie：userName=liming, useID=1001
// cookie: sessionId:01
// 2: cookie每次都随着http请求自动发送
// 3: 每次后端取出cookie信息 if(login) { 登录状态有效}
let count = 10000;
let sessiontable = [{
    userName: 'liming', useId: 1001, login: true, expire: '2021', id: 01
}]
http.createServer((req, res) => {
    function islogin() {
        if (req.headers['cookie']) {
            let cookie = req.headers['cookie'];
            console.log(cookie)
            
            let cookies = cookie.split(';');
            let sessionCookie = cookies.find(cookie => cookie.includes('session'));
            let [name, sessionId] = cookie.split('=');
            if (sessiontable.find((item) => {
                return item.id === Number(sessionId)
            })) {
                return true;
            } else {
                return false;
            }
        } else { 
            return false
        }
    }
    if (req.url.includes('/transfer')) {
        if (!islogin()) {
            res.end('un auth');
            return;
        }
        count -= 100;
        res.end('ok')
    } else if(req.url === '/count') {
        res.end(count + '');
    } else if(req.url === '/islogin') {
       if(login()) {
           res.end('login')
       }
       else {
           res.end('not login')
       }
    }

    else {
        const html = fs.readFileSync('./index.html', 'utf-8');
        res.setHeader('set-cookie','sessionId=1;samesite=lax');
        res.end(html);
    }

    
})
.listen(9090, () => {
    console.log(9090)
})