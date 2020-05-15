## Content-Type:text/plain
提交给后端的数据 纯文本

## multipart/form-data
```js
-----------------------------205579936434786223734260171678
Content-Disposition: form-data; name="name"

123
-----------------------------205579936434786223734260171678
Content-Disposition: form-data; name="file"; filename="test.txt"
Content-Type: text/plain

123456789

-----------------------------205579936434786223734260171678--
```

前面两种编码对二进制文件或者一些非 ASCII 字符 处理很低效

后端处理文件上传：
- 分隔符分隔
- 得到分隔之后的每一块文件内容，fs.write() 保存文件
- 完成