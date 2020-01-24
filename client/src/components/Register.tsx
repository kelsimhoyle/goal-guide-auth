import React, { useState, useContext } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { API } from '../utils/API';
// import { ContextProvider } from '../contexts/UserProvider';

interface SignupData {
    email: string,
    password: string,
    confirmPassword: string
}

interface PropsInterface {
    loggedIn: boolean
}
export const Register: React.FC<PropsInterface> = ({ loggedIn }) => {
    if (!loggedIn) console.log("not logged in")
    if (loggedIn) window.location.href = "/dashboard";

    const [signupData, setSingnupData] = useState<SignupData>({
        email: "",
        password: "",
        confirmPassword: ""
    })

    const { email, password, confirmPassword } = signupData;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSingnupData({ ...signupData, [name]: value })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        console.log("submitting")
        if (!email || !password || !confirmPassword) return false;

        API.signup(signupData)
            .then(data => {
                console.log(data)

            })
            .catch(err => console.log(err))
    }

    return (
        <Form onSubmit={e => handleSubmit(e)}>
            <FormGroup>
                <Label for="email">Email</Label>
                <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@gmail.com"
                    value={email}
                    onChange={(e) => handleChange(e)}
                />
            </FormGroup>
            <FormGroup>
                <Label for="password">Password</Label>
                <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => handleChange(e)}
                />
            </FormGroup>
            <FormGroup>
                <Label for="confirmPassword">Confirm Password</Label>
                <Input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="password"
                    value={confirmPassword}
                    onChange={(e) => handleChange(e)}
                />
            </FormGroup>
            <Button onClick={e => handleSubmit(e)}>Submit</Button>
        </Form>
    )
}