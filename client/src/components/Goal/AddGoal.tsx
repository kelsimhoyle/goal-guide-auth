import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Badge, Row, Col } from 'reactstrap';
import { Goal } from '../../types';

interface PropsInterface {
    goal: Goal;
    setStep: React.Dispatch<React.SetStateAction<number>>;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    setGoal: React.Dispatch<React.SetStateAction<Goal>>
}
export const AddGoal: React.FC<PropsInterface> = ({ goal, setStep, handleChange, setGoal }) => {
    const [values, setValues] = useState({ costLoss: "", costGain: "" })
    const costChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value })
    }

    const updateGoal = (item: string) => {
        if (item === "costGain") {
            setGoal({ ...goal, costGain: [...goal.costGain, values.costGain] })
            setValues({ ...values, costGain: "" })
        } else {
            setGoal({ ...goal, costLoss: [...goal.costLoss, values.costLoss] })
            setValues({ ...values, costLoss: "" })
        }
    }


    return (
        <Form onSubmit={() => setStep(2)}>
            <FormGroup>
                <Label for="goal">Goal</Label>
                <Input
                    plaintext
                    name="goal"
                    id="goal"
                    value={goal.goal}
                    onChange={e => handleChange(e)}
                />
            </FormGroup>
            <FormGroup>
                <Label for="goalType">What type of goal is this? Personal, professional, health, or anything else!</Label>
                <Input
                    plaintext
                    name="goalType"
                    id="goalType"
                    value={goal.goalType}
                    onChange={e => handleChange(e)}
                />
            </FormGroup>
            <FormGroup>
                <Label for="completionDate">Completion Date</Label>
                <Input
                    type="date"
                    name="completionDate"
                    id="completionDate"
                    placeholder="date placeholder"
                    value={goal.completionDate}
                    onChange={e => handleChange(e)}
                />
            </FormGroup>
            <FormGroup>
                <Label for="costGain">What will you gain from working on this goal?</Label>
                <Row>
                    {goal.costGain.map(item => (
                        <Badge color="light" key={item}>
                            {item}
                        </Badge>
                    ))}
                </Row>
                <Row>
                    <Col sm={10}>
                        <Input
                            plaintext
                            name="costGain"
                            id="costGain"
                            value={values.costGain}
                            onChange={e => costChange(e)}
                        />
                    </Col>
                    <Col sm={2}>
                        <Button onClick={() => updateGoal("costGain")}>+</Button>
                    </Col>
                </Row>
            </FormGroup>
            <FormGroup>
                <Label for="exampleText">What will you lose while working on this goal?</Label>
                <Row>
                    {goal.costLoss.map(item => (
                        <Badge color="light" key={item}>
                            {item}
                        </Badge>
                    ))}
                </Row>
                <Row>
                    <Col sm={10}>
                        <Input
                            plaintext
                            name="costLoss"
                            id="costLoss"
                            value={values.costLoss}
                            onChange={e => costChange(e)}
                        />
                    </Col>
                    <Col sm={2}>
                        <Button onClick={() => updateGoal("costLoss")}>+</Button>
                    </Col>
                </Row>
            </FormGroup>
            <Button onClick={() => setStep(2)}>Add Steps</Button>
        </Form>
    )
}