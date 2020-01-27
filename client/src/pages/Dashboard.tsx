import React, { useContext, useEffect, useState } from "react";
import { context } from '../contexts/UserProvider';
import { API } from "../utils/API";
import { ViewGoal } from '../components/ViewGoal';
import { Goal } from '../types';


export const Dashboard: React.FC = () => {
    const user = useContext(context)
    const [goals, setGoals] = useState<Goal[]>([{
        goal: "",
        goalType: "",
        completionDate: "",
        steps: [{
            miniGoal: "",
            completionDate: ""
        }],
        costLoss: [],
        costGain: [],
        userId: ""
    }])
    useEffect(() => {
        API.getUserGoals(user.user._id)
            .then(data => setGoals(data.data))
            .catch(err => console.log(err))
    }, [user])

    console.log(goals)
    return (
        <div>
            <h2>Hello, {user.user.email}</h2>
            {goals.map((goal: Goal) => <ViewGoal goal={goal} />)}
        </div>
    )
}