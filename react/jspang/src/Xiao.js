import React, { Component, Fragment } from 'react';
import './style.css'
import XiaoItem from './XiaoItem'
import Boss from './Boss'
import axios from 'axios'
class Xiao extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: ['中', '美']
        }
    }
    componentDidMount() {
        axios.get('https://juejin.im/post/5ee8c60ef265da76ed486e20')
        .then((res) => {
            console.log('axios获取数据成功:' + JSON.stringify(res))
            this.setState({
                list: res.data.data
            })
        })
        .catch((error) => {
            console.log('axios获取数据失败' + error)
            
        })
    }
    // componentWillMount() {
    //     console.log('componentWillMount------组件将要挂载到页面的时刻')
    // }

    // componentDidMount() {
    //     console.log('componentDidMount------组件完成挂载到页面的时刻')
    // }

    // shouldComponentUpdate() {
    //     console.log('1-shouldComponentUpdate')
    //     return true
    // }

    // componentWillUpdate() {
    //     console.log('2-componentWillUpdate')
    // }

    // componentDidUpdate() {
    //     console.log('4-componentDidUpdate')
    // }

    // componentWillReceiveProps() {
    //     console.log('componentWillReceiveProps')
    // }

    inputChange = (e) => {
        //console.log(e.target.value)
        //console.log(this)
        this.setState({
            inputValue: this.input.value
        })
    }

    addList = () => {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        }, () => {
            console.log(this.ul.querySelectorAll('li').length)
        })
    }

    deleteItem = (index) => {
        console.log(index)
        let list = this.state.list;
        list.splice(index, 1);
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
        //console.log('3-render-----组件挂载中')
        return (
            <Fragment>
                {/* flex */}
                <div>
                    <label htmlFor="jspang">增加服务</label>
                    <input
                        id="jspang" className="inputStyle"
                        value={this.state.inputValue}
                        onChange={this.inputChange}
                        ref={(input) => { this.input = input }}
                    />
                    <button onClick={this.addList}>增加服务</button></div>
                <ul ref={(ul) => { this.ul = ul }}>
                    {this.state.list.map((item, index) => {
                        return (

                            //     <li 
                            //     key={index + item }
                            //     onClick={ this.deleteItem.bind(index) }
                            //     dangerouslySetInnerHTML={{__html:item}}
                            // >

                            // </li>



                            <XiaoItem
                                //avname='aaa' 
                                key={index + item}
                                content={item}
                                index={index}
                                deleteItem={this.deleteItem}
                            />



                        )
                    })}
                </ul>
                <Boss />
            </Fragment>
        );
    }
}

export default Xiao;
