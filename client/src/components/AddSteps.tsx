import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import { Goal } from '../types';

interface PropsInterface {
    goal: Goal;
    setGoal: React.Dispatch<React.SetStateAction<Goal>>;
    setStep: React.Dispatch<React.SetStateAction<number>>;
    submitGoal: () => void;
}
export const AddSteps: React.FC<PropsInterface> = ({ goal, setStep, setGoal, submitGoal }) => {
    const [values, setValue] = useState<{ miniGoal: string, completionDate: string }>({ miniGoal: "", completionDate: "" })
    const [alertVisible, setVisible] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValue({ ...values, [name]: value })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<any, MouseEvent>) => {
        e.preventDefault();
        setGoal({
            ...goal,
            steps: [...goal.steps, values]
        })
        setVisible(true);
    }

    const addAnother = () => {
        setValue({ miniGoal: "", completionDate: "" });
        setVisible(false)
    }

    return (
        <>
            <Form onSubmit={e => handleSubmit(e)}>
                <FormGroup>
                    <Label for="miniGoal">Mini Goal</Label>
                    <Input
                        type="textarea"
                        name="miniGoal"
                        id="miniGoal"
                        value={values.miniGoal}
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
                        value={values.completionDate}
                        onChange={e => handleChange(e)}
                    />
                </FormGroup>
                <Button onClick={e => handleSubmit(e)}>Add Step</Button>
            </Form>
            <Alert color="success" isOpen={alertVisible} toggle={() => setVisible(false)} >
                <h4 className="alert-heading">Step added!</h4>
                <p>Have more steps to reach your goal?</p>
                <hr />
                <Button onClick={addAnother}>Add Another Step</Button>
                <Button onClick={submitGoal}>Finished</Button>
            </Alert>
        </>
    )
}