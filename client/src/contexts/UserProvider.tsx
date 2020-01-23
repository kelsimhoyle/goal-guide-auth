import React, {  useState, useEffect } from "react";
import { API } from "../utils/API";
import { AxiosResponse } from "axios";

interface UserContext {
    loggedIn: boolean,
    user: {}
}

const context = React.createContext<UserContext | null>(null);
export const ContextProvider = context.Provider
// wrapper to go around components to get data
export const UserProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState({ loggedIn: false, user: {} });

    //  life cycles
    useEffect(() => {
        API.isLoggedIn()
            .then((res: AxiosResponse) => setUser(res.data))
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
// ContextProvider.context = context;


