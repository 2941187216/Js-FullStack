import React, { Component } from 'react';

class Counter extends Component {
    // state={
    //     count: 0
    // }

    increment = () => {
        const {select_number} = this.refs;
        // const {count} = this.state;
        // this.setState({
        //     count: count + select_number.value*1
        // })
    }

    decrement = () => {
        const {select_number} = this.refs;
        // const {count} = this.state;
        // this.setState({
        //     count: count - select_number.value*1
        // })
    }

    incrementOfOdd = () => {
        const {select_number} = this.refs;
        // const {count} = this.state;
        // if(count % 2 === 1) {
        //     this.setState({
        //         count: count + select_number.value*1
        //     })
        // }
       
    }

    incrementAsync = () => {
        const {select_number} = this.refs;
        // const {count} = this.state;
        // setTimeout(() => {
        //     this.setState({
        //         count: count + select_number.value*1
        //     })
        // },1000)
    }
    render() { 
        return ( 
            <div>
                <span >count is {this.props.store.getState()}</span><br/>
                <select style={{margin:'4px'}} ref="select_number">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.increment} style={{margin:'4px'}}>+</button>
                <button onClick={this.decrement} style={{margin:'4px'}}>-</button>
                <button onClick={this.incrementOfOdd} style={{margin:'4px'}}>increment if odd</button>
                <button onClick={this.incrementAsync} style={{margin:'4px'}}>increment async</button>
            </div>
         );
    }
}
 
export default Counter;