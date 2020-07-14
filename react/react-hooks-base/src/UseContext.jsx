import React, { createContext, useState } from 'react';
import { useEffect, useContext, useRef } from 'react';
// 跨层级传输数据
const context = createContext({
    theme: 'red'
})

function P() {
    let [obj, setTheme] = useState({theme: 'red'})
    useEffect(() => {
        setTimeout(() => {
            // obj.theme = 'blue'
            setTheme({
                theme: 'blue'
            })
        }, 3000)
    }, [])
    return (
        <context.Provider value={obj}>
            <Child a="1" />
        </context.Provider>
    )
}

function Child() {
    return <Son />
}

function Son() {
    // 最近的context
    const value = useContext(context)
    const ref = useRef()
    useEffect(() => {
        console.log(ref.current)
    }, [])
    return (
        <p>
            666
            <h2 style={{color:value.theme}}
            ref={ref}
            ></h2>
            {/* <context.Consumer> 
                {
                    (value) => {
                        return (
                            <h2 style={{color: value.theme}}></h2>
                        )
                    }
                }
            </context.Consumer> */}
        </p>
    )
}



export default P;