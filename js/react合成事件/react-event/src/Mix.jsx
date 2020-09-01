import React from 'react';
class Mix extends React.Component {
    state = {
        visible: false
    }

    handleToogle = (e) => {
        console.log(1)
        this.setState({
            visible: !this.state.visible
        })
        // 阻止外层document事件的调用
        e.stopPropagation();
        // react会将jsx中用js写的事件绑定到了document上
        // 所有的事件统一采用的事件监听 都是一个 document.addEventListener('click')
        // 事件监听器 内部维护了 元素 和 事件处理函数 的关系
        // e.stopPropagation();也是react自己实现的阻止冒泡
        // 仅限于都用react的事件才生效
    }

    componentDidMount() {
        
        document.body.addEventListener('click', () => {
            console.log(2)
            this.setState({
                visible: false
            })
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.handleToogle}>toogle</button>
                <div style={{ display: this.state.visible ? 'block' : 'none'}}>content</div>
            </div>
        )
    }
}

export default Mix;