import React, { useState } from "react";
import { Login } from "../components/Login";
import { Register } from '../components/Register';

interface PropsInterface {
    action: string,
    loggedIn: {
        loggedIn: boolean,
        user: {}
    }
}

export const Auth: React.FC<PropsInterface> = ({ action, loggedIn }) => {
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