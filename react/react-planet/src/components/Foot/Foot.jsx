import React, { Component } from 'react';

class Foot extends Component {
    
    render() { 
        return ( 
            <div className="foot">
                <div className="foot-item1">
                    <span className="iconfont">&#xe74f;</span>
                    <span className="fitem1-text">星球</span>
                </div>
                <div className="foot-item2">
                    <span className="iconfont">&#xe502;</span>
                    <span className="fitem2-text">动态</span>
                </div>
                <div className="foot-item3">
                    <span className="iconfont">&#xe503;</span>
                    <span className="fitem3-text">发现</span>
                </div>
                <div className="foot-item4">
                    <span className="iconfont">&#xe608;</span>
                    <span className="fitem4-text">我</span>
                </div>
            </div>
         );
    }
}
 
export default Foot;