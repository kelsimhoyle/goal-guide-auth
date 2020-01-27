import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { API } from '../utils/API';

interface LoginInterface {
    email: string,
    password: string,
}

export const Login: React.FC = () => {
    const [loginData, setLoginData] = useState<LoginInterface>({
        email: "",
        password: ""
    })

    const { email, password } = loginData;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        if (!email || !password) return false;

        API.login(loginData)
            .then(data => {
                window.location.href = '/profile';
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
            <Button onClick={e => handleSubmit(e)}>Submit</Button>
        </Form>
    )

}