import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import Home from './components/home/Home'
import Add from './components/add/Add';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path='/home' exact component={Home}/>
        <Route path='/add'  component={Add}/>
        <Redirect  to="/home" />
      </BrowserRouter>
    )
  }
}

export default App;
