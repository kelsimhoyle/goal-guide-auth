import React, { useState, useEffect } from "react";
import { Col, Row, Card, CardTitle } from "reactstrap";
import { AddGoal } from '../components/AddGoal';
import { AddSteps } from '../components/AddSteps';
import { ViewGoal } from '../components/ViewGoal';
import { Goal, User } from '../types';
import { API } from '../utils/API';

interface PropsInterface {
    loggedIn: boolean,
    user: User
}
export const SetGoal: React.FC = () => {
    const [goal, setGoal] = useState<Goal>({
        goal: "",
        goalType: "",
        completionDate: "",
        steps: [],
        costLoss: [],
        costGain: [],
        userId: ""
    });


    const [step, setStep] = useState(1);

    useEffect(() => {
        API.isLoggedIn()
            .then(data => {
                setGoal({ ...goal, userId: data.data.user._id })
            })
            .catch(err => console.log(err))
    }, [goal])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setGoal({ ...goal, [name]: value })
    }

    const submitGoal = () => {
        console.log(goal)
        API.postGoal(goal)
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }

    const renderStep = (step: number) => {
        switch (step) {
            case 1:
                return (
                    <AddGoal
                        goal={goal}
                        setStep={setStep}
                        handleChange={handleChange}
                        setGoal={setGoal}
                    />)
            case 2:
                return (
                    <AddSteps
                        goal={goal}
                        setGoal={setGoal}
                        setStep={setStep}
                        submitGoal={submitGoal}
                    />
                )
            default:
                return (
                    <AddGoal
                        goal={goal}
                        setStep={setStep}
                        handleChange={handleChange}
                        setGoal={setGoal}
                    />)
        }
    }

    return (
        <Row>
            <Col md={6} sm={12}>
                <Card body>
                    <CardTitle tag="h3">Let's Make a Goal!</CardTitle>
                    <hr />
                    {renderStep(step)}
                </Card>
            </Col>
            <Col md={6} sm={12}>
                <h2>Your Goal</h2>
                <ViewGoal goal={goal} />
            </Col>
        </Row>
    )




}