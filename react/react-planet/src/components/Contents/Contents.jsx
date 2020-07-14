import React, { Component } from 'react';
import a from '../../img/1.png';
import b from '../../img/2.png';
import c from '../../img/3.png';
import d from '../../img/4.png'; 
const users = [{
    image: a,
    theme: '刘达专场',
    line: '---',
    author: '笑叹'
},{
    image: b,
    theme: '刘达专场',
    line: '---',
    author: '笑叹'
},{
    image: c,
    theme: '刘达专场',
    line: '---',
    author: '笑叹'
},{
    image: d,
    theme: '刘达专场',
    line: '---',
    author: '笑叹'
}]
class Contents extends Component {
   
    render() { 
        return ( 
            <div className="contents">
              {users.map((user, i) => {
                  return (
                      <div key={i} className="contitem">
                          <div className="contitem1"><img src={user.image}/></div>
                          <div className="contitem2">{user.theme}</div>
                          <div className="contitem3">{user.line}</div>
                          <div className="contitem4">{user.author}</div>
                      </div>
                  )
              })}  
            </div>
         );
        
    }
}
 
export default Contents;