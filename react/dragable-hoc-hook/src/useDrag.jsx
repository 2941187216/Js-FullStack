import React, { useState } from 'react';
// useState 之前: 组件 class function
// useState 官方定义的hook 函数组件内部定义 state
// useDrag 自己定义出来的 hook
function useDrag() {
    // state = {
    //     left: 0,
    //     top: 0
    // }
    const [state, setState] = useState({
        left: 0,
        top: 0
    })
    var handleDown = (e) => {
        var startX = e.clientX;
        var startY = e.clientY;
        let obj = e.target.getBoundingClientRect();
        // 重置起点
        // this.startX = startX - obj.x;
        // this.startY = startY - obj.y;
        document.addEventListener('mousemove', handleMove)
        document.addEventListener('mouseup', handleUp)
    }
    var handleMove = (e) => {
        var newX = e.clientX;
        var newY = e.clientY;
        const diffX = newX;
        const diffY = newY;
        setState({
            left: diffX,
            top: diffY
        })
    }
    var handleUp = () => {
        document.removeEventListener('mousemove', handleMove);
        document.removeEventListener('mouseup', handleUp)
    }
    return {
        left: state.left, 
        top: state.top,
        handleDown
    }
}

function DDrag1() {
    const {left, top, handleDown} = useDrag()
    return (
        <div 
            style={{left, top}} 
            className="dragable"
            onMouseDown={handleDown}
        >
             drag1
        </div>
    )
}
export const Drag1 = DDrag1;
export default useDrag;