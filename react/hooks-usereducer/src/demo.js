import React, { Fragment ,useReducer,memo} from 'react'


const userInfoReducer = ( state,action ) => {
    switch(action.type) {
        case 'setusername':
            return {
                ...state,
                name: action.payload
            }
        case 'setlastname':
            return {
                ...state,
                lastname: action.payload
            }
        default:
            return state;
    }
}

export const MyComponent = () => {
    const [reducer, dispatch] = useReducer(userInfoReducer, {
        name: 'Jonh',
        lastname: 'Doe'
    })

    return (
        <Fragment> 
            <h3> 
                {reducer.name} {reducer.lastname}
            </h3>
            < EditUsername name={reducer.name} dispatch={dispatch}/>
            <input 
            value = {reducer.lastname}
            onChange = { e => dispatch({
                type: 'setlastname',
                payload:e.target.value
            })}
            />
        </Fragment>
    )
}

export const EditUsername = memo(props => {
    console.log('I am rerendered when name gets updated!!!')
    return (
        <Fragment>
            <input 
            value={props.name}
            onChange = { e => props.dispatch({
                type: 'setusername',
                payload: e.target.value
            })}
            />
        </Fragment>
    )
})