import React from 'react'
import authStore from './store/auth';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute(props) {
    const isLogin = authStore.isLogin;
    // react-router
    // <Route />
    const {path, component} = props;
    if(!isLogin) {
        return (
            < Redirect to="/login" />
        )
    }
    return (
        <Route path={path} component={component}/>
    )
}
