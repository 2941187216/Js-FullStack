import React from 'react';
import logo from './logo.svg';
import Header from './components/Header'
import './App.css';
import { fromJS } from 'immutable'
import ImmutableComponent from './components/common'
class App extends React.Component {
  // 最外层数据 依然是个原生js对象
  // redux 
  state = {
    title: fromJS('123')
  }
  // shouldComponentUpdate() {


  // }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        title: fromJS('89890')
      })
    }, 3000)
  }
  render() {
    console.log('App render')
    return (
      <div>
        123456
        <Header title={this.state.title}/>
      </div>
    )
  }
}


export default App;