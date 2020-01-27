import React, { useState, useEffect } from "react";
import { API } from "../utils/API";
import { AxiosResponse } from "axios";
import { User } from '../types';

interface UserContext {
    loggedIn: boolean,
    user: User,
    loading: boolean
}

export const context = React.createContext<UserContext>({
    loggedIn: false,
    user: {
        _id: "",
        email: "",
        password: "",
        passwordResetToken: "",
        passwordResetExpires: "",

        facebook: "",
        tokens: [],

        profile: {
            name: "",
            gender: "",
            location: "",
            website: "",
            picture: "",
        },
        goals: []
    },
    loading: true
});
export const ContextProvider = context.Provider
// wrapper to go around components to get data
export const UserProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState({
        loggedIn: false, user: {
            _id: "",
            email: "",
            password: "",
            passwordResetToken: "",
            passwordResetExpires: "",

            facebook: "",
            tokens: [],

            profile: {
                name: "",
                gender: "",
                location: "",
                website: "",
                picture: "",
            },
            goals: []
        }, loading: true
    });

    //  life cycles
    useEffect(() => {
        API.isLoggedIn()
            .then((res: AxiosResponse) => setUser({ ...res.data, loading: false }))
            .catch((err: Error) => {
                console.log(err);
            });
    }, [user.loggedIn]);

    return (
        <ContextProvider value={user}>
            {children}
        </ContextProvider>
    );
};

export const AppContextConsumer = context.Consumer;

// render all of the children
// UserProvider.context = context;


