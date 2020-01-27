import React, { Fragment, useContext } from 'react';
import { Redirect, RouteProps } from 'react-router-dom';
import { Spinner } from "reactstrap";
import { context } from '../contexts/UserProvider';


export const PrivateRoute: React.FC<RouteProps> = ({ children }) => {
    const user = useContext(context)

    const renderContent = () => {
        if (!user.loggedIn) return <Redirect to="/login" />
        return children
    }

    return (
        <Fragment>
            {!user.loading ? renderContent() : <Spinner style={{ width: '3rem', height: '3rem' }} type="grow" color="info" />
            }
        </Fragment>
    )
}

