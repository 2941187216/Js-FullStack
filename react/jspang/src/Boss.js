import React, { Component } from 'react';
import { CSSTransition} from 'react-transition-group'

class Boss extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            isShow: true
        }
    }
    
    toToggol = () => {
        this.setState({
           isShow: this.state.isShow ? false : true 
        })
    }
    render() { 
        return ( 
            <div>
                <CSSTransition
                    in={this.state.isShow}
                    timeout={2000}
                    classNames="boss-text"
                    unmountOnExit
                >
                    <div>Boss级人物</div>
                </CSSTransition>
                <div>
                    <button onClick={ this.toToggol }>召唤Boss</button>
                </div>
            </div>
         );
    }
}
 
export default Boss;