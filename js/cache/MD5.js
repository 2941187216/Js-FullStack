// 散列 / 哈希
const md5 = require('md5');
// 同样的输入同样的输出
console.log(md5('abc'));
console.log(md5('abc'));
console.log(md5('abcdefg'));


// 如果两次 MD5 的结果是一样的 => 两次原始的未加密的内容也是一样的
// => 两次 MD5的结果一样 => 两次