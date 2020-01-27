import React, { useContext } from "react";
import { Login } from "../components/Login";
import { Register } from '../components/Register';
import { context } from '../contexts/UserProvider';
import { Redirect } from 'react-router-dom';

interface PropsInterface {
    action: string,
    loggedIn: {
        loggedIn: boolean,
        user: {}
    }
}

export const Auth: React.FC<PropsInterface> = ({ action, loggedIn }) => {
    const user = useContext(context);
    console.log(user)

    const renderComponent = () => {
        if (action === "register") {
            return (
                <Register loggedIn={loggedIn.loggedIn} />
            )
        } else {
            return (
                <Login />
            )
        }

    }

    return (
        <>
            {user.loggedIn ? (
                <Redirect to="/dashboard" />
            ) : (
                    renderComponent()
                )}
        </>
    )
}