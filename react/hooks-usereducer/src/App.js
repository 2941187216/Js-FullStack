import React from 'react';

import './App.css';
// import { MyComponent } from './demo';
import {MyContextProvider, MyComponent2} from './demo2'
function App() {
  return (
      
      
      <MyContextProvider>
        <div className="App">
        < MyComponent2 />
      </div>
      </MyContextProvider>

  );
}

export default App;
