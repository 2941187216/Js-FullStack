生命周期的三个阶段：
1. 初始化渲染: render() componentDidMount
2. 更新阶段: shouldComponentUpdate render              componentDidUpdate
3. 卸载阶段: componentWillUnmount(清除全局事件，定时器)

1. useState
2. useEffect
3. useMemo 只能缓存值
4. useCallback 缓存函数