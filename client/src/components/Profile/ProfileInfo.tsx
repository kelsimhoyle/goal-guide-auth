import React, { useContext, useState, useEffect } from "react";
import { context } from '../../contexts/UserProvider';
import { FormGroup, Form, Label, Input, Button, Col } from 'reactstrap';
import { User, Profile } from '../../types';
import { API } from '../../utils/API';
import { AxiosResponse } from 'axios';
export const ProfileInfo: React.FC = () => {
    const user = useContext(context);
    const [values, setValues] = useState<User>({
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
    });

    const [profile, setProfile] = useState<Profile>({
        email: "",
        name: "",
        gender: "",
        location: "",
        website: ""
    })

    useEffect(() => {
        setValues({ ...values, ...user.user })
        setProfile({ ...profile, ...user.user.profile, email: user.user.email })
    }, [user])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value })
    }
    const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value })
    }

    const handleSubmit = () => {
        console.log("submitting")
        console.log(profile)
        API.updateProfile(profile)
            .then((data: AxiosResponse) => console.log(data))
            .catch((err: Error) => console.log(err))
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup row>
                <Label for="email" sm={2}>Email</Label>
                <Col sm={7}>
                    <Input
                        plaintext
                        name="email"
                        id="email"
                        value={values.email}
                        onChange={e => handleChange(e)}
                    />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="name" sm={2}>Name</Label>
                <Col sm={7}>
                    <Input
                        plaintext
                        name="name"
                        id="name"
                        value={profile.name}
                        onChange={e => handleProfileChange(e)}
                    />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="gender" sm={2}>Gender</Label>
                <FormGroup check sm={7}>
                    <Label check>
                        <Input
                            type="radio"
                            name="gender"
                            id="female"
                            checked={profile.gender === "female"}
                            value="female"
                            onClick={() => setProfile({ ...profile, gender: "female" })}
                        />
                        Female
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input
                            type="radio"
                            name="gender"
                            id="male"
                            checked={profile.gender === "male"}
                            value={profile.gender}
                            onClick={() => setProfile({ ...profile, gender: "male" })}
                        />
                        Male
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input
                            type="radio"
                            name="gender"
                            id="other"
                            checked={profile.gender === "other"}
                            value={profile.gender}
                            onClick={() => setProfile({ ...profile, gender: "other" })}
                        />
                        Other
                    </Label>
                </FormGroup>
            </FormGroup>
            <FormGroup row>
                <Label for="location" sm={2}>Location</Label>
                <Col sm={7}>
                    <Input
                        plaintext
                        name="location"
                        id="location"
                        value={profile.location}
                        onChange={e => handleProfileChange(e)}
                    />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="Website" sm={2}>Website</Label>
                <Col sm={7}>
                    <Input
                        plaintext
                        name="website"
                        id="website"
                        value={profile.website}
                        onChange={e => handleProfileChange(e)}
                    />
                </Col>
            </FormGroup>
            <Button onClick={handleSubmit}>Update Profile</Button>
        </Form>
    )
}