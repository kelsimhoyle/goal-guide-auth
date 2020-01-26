import React from "react";
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import { StepDisplay } from "./StepDisplay";
import { Goal } from "../types"

interface PropsInterface {
    goal: Goal;
}
export const ViewGoal: React.FC<PropsInterface> = ({ goal }) => (
    <Card body>
        <CardTitle tag="h3">{goal.goal}</CardTitle>
        <CardText>Completion Date: {goal.completionDate}</CardText>
        <CardText tag="h6">Steps:</CardText>
        {goal.steps.map(step => <StepDisplay step={step} />)}
    </Card>
)