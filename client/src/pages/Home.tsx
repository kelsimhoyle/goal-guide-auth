import React from "react";
import { Jumbotron, Button } from 'reactstrap';
export const Home: React.FC = () => {


    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">Your Goal Guide</h1>
                <p className="lead">Tackling goals is scary. You don't have to do it alone.</p>
                <hr className="my-2" />
                <p> We will guide you. Have all your goals in one place.</p>
                <p className="lead">
                    <Button href="/register" color="primary">Create an Account</Button>
                </p>
            </Jumbotron>
        </div>
    )
}