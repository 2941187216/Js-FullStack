1. settimeout
2. promise
3. 请求
4. addevent
5. 页面

浏览器内部有很多线程
1. 定时器触发线程
2. http
3. GUI线程

## Event-loop
 浏览器协调用户交互，渲染，网络等任务
    ```js
    setTimeout(() => {
    console.log(1);
        }, 0)
    Promise.resolve(3).then(console.log);
    console.log(2);
    ```
 - 宏任务 || 任务(由宿主环境引起的任务)
    setTimeout, 整体的一段script

 - 微任务(由js本身引起的任务)
    Promise.then  MuatationObserver  Process.nextTick

## 流程
1. 从宏任务队列里面取出 一个 执行
2. 从微任务队列里面取出 所有 的执行，如果在这执行过程中又产生了微任务，再次 重复 第二步
3. 有可能进入浏览器的更新渲染