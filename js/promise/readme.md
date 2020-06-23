## Promise
- 3种状态: pending(进行中)，fulfilled(已成功),rejected(失败)
- 只能从pending -> fulfilled, pending -> rejected
- 对象的状态不受外界影响
- 状态一旦改变，就不会再变
- 优点
  1.将异步操作以同步操作的流程表达出来
  2.统一的接口使得控制异步的操作更容易
- 缺点
  1.无法取消，一旦新建便会立即执行
  2.内部抛出的错误，不会反应到外部
  3.当处于pending状态时，无法得知目前进展到哪一个阶段