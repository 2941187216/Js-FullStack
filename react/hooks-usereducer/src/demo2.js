import React, { createContext, useState, Fragment,useContext } from 'react'


//数据模板
const MyContext = createContext({
    username: "",
    setUsername: () => {}
})

export const MyContextProvider = (props) => {
    const [username, setUsername] = useState("John Sun");

    return (
        <MyContext.Provider value={{username, setUsername}}>
            {props.children}
        </MyContext.Provider>
    )
}

export const MyComponent2 = () => {
    const myContext = useContext(MyContext);
    return (
        <Fragment>
            <h3>
                {myContext.username}
            </h3>
        </Fragment>
    )
}