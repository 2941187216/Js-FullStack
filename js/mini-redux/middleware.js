const _ = require('lodash') 
function fn1(str) {
    return str + 'def'
}
// class A
function fn2(str) {
    return str.toUpperCase();
}
// class B
// 继承
// 组合


const fn = myFlow([fn1, fn2])
console.log(fn('abc'));

function myFlow(fns) {
    // 组合所有函数
    // fn3(fn2(fn1()))
    return function(defaultValue) {
        let res = defaultValue;
        while(fns.length) {
            let first = fns.shift();
            res = first(res)
        }
        return res;
    }
}