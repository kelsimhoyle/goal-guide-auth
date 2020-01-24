import React from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Goal } from '../types';

interface PropsInterface {
    goal: Goal;
    setStep: React.Dispatch<React.SetStateAction<number>>;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const AddGoal: React.FC<PropsInterface> = ({ goal, setStep, handleChange }) => {
    return (
        <Form onSubmit={() => setStep(2)}>
            <FormGroup>
                <Label for="goal">Goal</Label>
                <Input
                    type="textarea"
                    name="goal"
                    id="goal"
                    value={goal.goal}
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
                <Input
                    type="textarea"
                    name="costGain"
                    id="costGain"
                    value={goal.costGain}
                    onChange={e => handleChange(e)}
                />
            </FormGroup>
            <FormGroup>
                <Label for="exampleText">What will you lose while working on this goal?</Label>
                <Input
                    type="textarea"
                    name="costLoss"
                    id="costLoss"
                    value={goal.costLoss}
                    onChange={e => handleChange(e)}
                />
            </FormGroup>
            <Button onClick={() => setStep(2)}>Add Steps</Button>
        </Form>
    )
}