import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// 可变
let obj = {}
let obj1 = obj;
let obj2 = obj1;

obj1.name = 123  // 本意是修改一下obj1，但是却影响了obj，obj2(副作用)
console.log(obj)

// 不可变
let newObj = {}
let obj3 = {
  ...newObj
}
obj3.name = 123; // 没有任何副作用
console.log(obj3, newObj);
//

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
