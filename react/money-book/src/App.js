import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Page/Home/Index'
import Create from './Page/Create/index'
function App() {
  return (
    <BrowserRouter> 
      <Route exact path="/" component={Home}/>
      <Route path="/create" component={Create}/>
    </BrowserRouter>
  );
}

export default App;
