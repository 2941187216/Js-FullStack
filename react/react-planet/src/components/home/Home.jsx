import React, { Component } from 'react';
import Header from '../Header/Header';
import Search from '../Search/Search';
// import Header from '../Header/Header'
// import Search from '../Search/Search'
import Contents from '../Contents/Contents'
import Foot from '../Foot/Foot';

class Home extends Component {
    render() {
        return (
          <div>
            <Header/>
            <Search/>
            <Contents/>
            <Foot/>
          </div>  
        )
      }
}
 
export default Home;