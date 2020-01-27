import React from "react";
import { CardText } from "reactstrap";

interface Step {
    step: {
        miniGoal: string;
        completionDate: string;
    }
}
export const StepDisplay: React.FC<Step> = ({ step }) => (
    <CardText>
        <strong>{step.miniGoal}:</strong> {step.completionDate}
    </CardText>
);