import React, { Component } from 'react';
class Search extends Component {
    render() { 
        return ( 
            <div className="search">
               <input className="search-input"type="text" placeholder="搜索用户、星球或内容"/>
               <span className="iconfont">&#xe615;</span> 
            </div>
         );
    }
}
 
export default Search;