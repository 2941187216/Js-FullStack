import React, { Component } from 'react';
import PropTypes from 'prop-types'

class XiaoItem extends Component {
    handleClick = () => {
        this.props.deleteItem(this.props.index)
    }
    render() { 
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