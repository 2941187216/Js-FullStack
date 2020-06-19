import React, { Component } from 'react';
import Counter from './components/counter';

class App extends Component {
    // state={
    //     count: 0
    // }
    render() {
        const {store} = this.props
        return (
            <Counter store={store}/>
        )
    }
   
}
 
export default App;