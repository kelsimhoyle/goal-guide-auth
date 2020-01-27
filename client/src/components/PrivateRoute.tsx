import React, { Fragment, useContext } from 'react';
import { Redirect, RouteProps } from 'react-router-dom';
import { context } from '../contexts/UserProvider';


export const PrivateRoute: React.FC<RouteProps> = ({ children }) => {
    const user = useContext(context)

    const renderContent = () => {
        if (!user.loggedIn) return <Redirect to="/login" />
        return children
    }

    return (
        <Fragment>
            {!user.loading ? renderContent() : "loading"}
        </Fragment>
    )
}

