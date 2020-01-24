import mongoose from "mongoose";

export type GoalDocument = mongoose.Document & {
    goal: string;
    completionDate: Date;
    steps: [{
        miniGoal: string;
        completionDate: Date;
    }];
    costLoss: string[];
    costGain: string[];
    user: string;
};

const goalSchema = new mongoose.Schema({
    goal: {
        type: String,
        required: true
    },
    completionDate: {
        type: Date,
        required: true
    },
    steps: [{
        miniGoal: {
            type: String,
            required: true
        },
        completionDate: {
            type: Date,
            required: true
        }
    }],
    costLoss: [String],
    costGain: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

export const Goal = mongoose.model<GoalDocument>("Goal", goalSchema);