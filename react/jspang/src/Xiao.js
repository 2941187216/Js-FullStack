import React, { Component, Fragment } from 'react';
import './style.css'
import XiaoItem from './XiaoItem'
class Xiao extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: ['中','美']
        }
    }
    
    inputChange = (e) => {
        //console.log(e.target.value)
        //console.log(this)
        this.setState({
            inputValue: e.target.value
        })
    }

    addList = () => {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })   
    }

    deleteItem = (index) => {
        console.log(index)
        let list = this.state.list;
        list.splice(index,1);
        this.setState({
            list: list
        })
    }
    // deleteItem(index) {
    //     console.log(index)
    //     let list = this.state.list;
    //     list.splice(index,1);
    //     this.setState({
    //         list: list
    //     })

    // }
    render() { 
        return ( 
                <Fragment>
                    {/* flex */}
                    <div>
                        <label htmlFor="jspang">增加服务</label>
                        <input id="jspang" className="inputStyle"value={ this.state.inputValue } onChange= {this.inputChange}/> 
                        <button onClick={ this.addList }>增加服务</button></div>
                    <ul>
                        { this.state.list.map((item, index) => {
                            return (
                                 
                                //     <li 
                                //     key={index + item }
                                //     onClick={ this.deleteItem.bind(index) }
                                //     dangerouslySetInnerHTML={{__html:item}}
                                // >
                                    
                                // </li>
                                    
                                
                                
                                    <XiaoItem
                                        //avname='aaa' 
                                        key={index + item }
                                        content={item} 
                                        index={index}
                                        deleteItem={this.deleteItem}
                                    />
                                
                                
                                
                            )
                        })}
                    </ul>
                </Fragment>
         );
    }
}
 
export default Xiao;
