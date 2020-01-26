import React, { Component, Fragment, Props, useEffect, useState } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { API } from "../utils/API"



export const PrivateRoute: React.FC<RouteProps> = ({ children }) => {
    const [user, setUser] = useState({ loading: true, loggedIn: false, user: {} })

    useEffect(() => {
        API.isLoggedIn()
            .then(data => {
                console.log(data)
                setUser({
                    loading: false,
                    ...data.data
                })
            })
            .catch(err => console.log(err))

    }, [])

    const renderRoute = (loggedIn: boolean) => {
        if (loggedIn) {
            return children
        } else {
            return <Redirect to="/login" />
        }
    }


    return (
        <Fragment>
            {user.loading ? (
                "Loading..."
            ) : renderRoute(user.loggedIn)}
        </Fragment>
    )
}

