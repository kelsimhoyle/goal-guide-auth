import React from "react";


interface PropsInterface {

    loggedIn: {
        loggedIn: boolean,
        user: {}
    }
}
export const Dashboard: React.FC<PropsInterface> = ({ loggedIn }) => {
    return (
        <div>
            <h1>HELLLOOO {loggedIn ? loggedIn.user : "!!"} </h1>
        </div>
    )
}