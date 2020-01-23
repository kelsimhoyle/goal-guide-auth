import React, { useState } from "react";
import { Login } from "../components/Login";
import { Register } from '../components/Register';

interface PropsInterface {
    action: string
}

export const Auth: React.FC<PropsInterface> = ({ action }) => {
    if (action === "register") {
        return (
            <Register loggedIn={false} />
        )
    } else {
        return (
            <Login />
        )
    }
}