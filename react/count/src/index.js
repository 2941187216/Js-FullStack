import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store'
import App1 from './App1';


ReactDOM.render(
  <React.StrictMode>
    <App1 store={ store }/>
  </React.StrictMode>,
  document.getElementById('root')
);
store.subscribe(() => {
  ReactDOM.render(
    <React.StrictMode>
      <App1 store={ store }/>
    </React.StrictMode>,
    document.getElementById('root')
  );
})


