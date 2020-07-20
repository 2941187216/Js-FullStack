const express = require('express');


const app = express();
// GET路由
app.get('/big.js', (req, res) => {
    const fs = require('fs');
    const jsContent = fs.readFileSync('./big.js', 'utf-8')
    // 一堆头部字段
    // content-type
    // 强缓存：200 from memory/disk cache, 请求不会到达服务器
    res.setHeader('Cache-Control', 'max-age=20');

    // 协商缓存：请求会到达服务器
    // 20之后，请求(会携带一个 if-none-match的字段)
    // if-none-match: 浏览器发现上一次请求 服务器 有Etag设置，浏览器自动发送一个
    // ?? etag 生成：MD5
    // if-modified-since: 文件修改了文件的最好修改会发生变化
    // 服务器 对比前后两次文件有没有变化 从时间角度考虑，有缺陷
    
    const Etag = md5(jsContent);
    const oldEtag = req.headers['if-none-match'];
    if (Etag === oldEtag) {
        // 文件没有变化
        // 从缓存里面读取 304 (not modified)
        res.sendStatus(304).end('')
        return;
    }
    res.setHeader('Etag', Etag);
    res.end(jsContent)
})
app.listen(9090, () => {
    console.log(9090)
})