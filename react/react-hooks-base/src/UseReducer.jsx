import React, { useReducer, useCallback } from 'react';

// const initState = {
//     count: 0
// }

function reducer(state, action) {
    switch(action.type) {
        case 'ADD':
            return { count: state.count + 1}
        case 'REDUCER':
            return { count: state.count - 1}
        default:
            return state;
    }
}

function Counter() {
    const [store, dispatch]= useReducer(reducer, {count: 0})
    const handleAdd = useCallback(() => {
        dispatch({type: 'ADD'})
    }, [])// 依赖避免重新定义，避免重复渲染
    const handleReduce =  useCallback(() => {
        dispatch({type: 'REDUCER'})
    }, [])
    return (
        <div>
            count: {store.count}
            <button onClick={handleAdd}>+</button>
            <button onClick={handleReduce}>-</button>
        </div>
    )
}

export default Counter