import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store'
import App1 from './App1';
import {Provider} from 'react-redux'

ReactDOM.render(
    <Provider store={ store }>
      <App1 />
    </Provider>,
  document.getElementById('root')
);



