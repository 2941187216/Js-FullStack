import React, { Component } from 'react';
import PropTypes from 'prop-types'

class XiaoItem extends Component {
    //组件第一次存在dom，函数不会自动执行 
    //如果已经存在dom中，函数会自动执行
    // componentWillReceiveProps() {
    //     console.log('child-componentWillReceiveProps')
    // }

    // componentWillUnmount() {
    //     console.log('child-componentWillUnmount')
    // }
    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.content !== this.props.content) return true
        return false;
    }
    handleClick = () => {
        this.props.deleteItem(this.props.index)
    }
    render() { 
        console.log('child-render')
        return ( 
        <li onClick={ this.handleClick}>
            {this.props.avname}为你服务-{ this.props.content}</li>
         );
    }
}

XiaoItem.propTypes = {
    avname: PropTypes.string.isRequired,
    content: PropTypes.string,
    index: PropTypes.number,
    deleteItem: PropTypes.func
}

XiaoItem.defaultProps = {
    avname: '版本'
}
export default XiaoItem;