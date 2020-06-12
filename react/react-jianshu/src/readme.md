## 组件 重新渲染
有哪几种情况引起？
- state
- 地址 -> react-router -> ?
- props 变化
- context 变了 react.createContext()

## 减少重新渲染
state props 对比前后没有变化 => 没有必要渲染
