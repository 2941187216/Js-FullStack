let action1 = {
    type: 'INCREMENT'
}
let action2 = {
    type: 'DECREMENT'
}
function reducer(state = 1, action) {
    if (action.type === 'INCREMENT') {
        return state + 1
    } else if(action.type === 'DECREMENT') {
        return state - 1
    }
    else {
        return state;
    }
}

let store = createStore(reducer)
// store.dispatch(action1)
store.dispatch(action1)
console.log(store.getState())

// redux-thunk
// let action2 = function (dispatch) {
//     axion().then(() => {
//         dispatch()
//     })
// }
// store.dispatch(action3)
// 洋葱模型

function createStore(reducer) {
    let state // 1
    // 
    function dispatch(action) {
        state = reducer(state, action);
    }
    dispatch({type: ''}) // state 为 reducer 那里的默认值
    function getState() {
        return state;
    }

    return {
        dispatch,
        getState
    }
}