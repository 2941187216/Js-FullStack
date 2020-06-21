import { createStore, applyMiddleware } from 'redux'

import reducer from './reducer'
// 引入中间件，处理异步action
import thunk from 'redux-thunk'
export default createStore(reducer, applyMiddleware(thunk))