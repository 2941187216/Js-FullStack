const { SyncHook, AsyncSeriesHook } = require('tapable');
const hook = new SyncHook();
const  asyncHook = new AsyncSeriesHook();
// on
hook.tap('hook1', () => {
    console.log(1)
})

// emit
hook.call();

asyncHook.tapPromise('xxx', () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 3000);
    })
})

asyncHook.tapPromise('xxx', () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 4000);
    })
})

// asyncHook.tapAsync();
// asyncHook.callAsync();
asyncHook.tapAsync('XXXXXX',(cb) => {
    setTimeout(() => {
        cb();
    }, 3000)
})
console.time('a');
asyncHook.promise().then(() => {
    console.timeEnd('a')
    console.log('async complete')
});
asyncHook.callAsync(() => {
    console.log('结束了')
})