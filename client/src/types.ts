export interface SignupInfo {
    email: string,
    password: string,
    confirmPassword: string
}

export interface LoginInfo {
    email: string,
    password: string
}

export interface Goal {
    goal: string;
    goalType: string;
    completionDate: string;
    steps: {
        miniGoal: string;
        completionDate: string;
    }[],
    costLoss: string[];
    costGain: string[];
    userId: string;
};

export interface AuthToken {
    accessToken: string;
    kind: string;
}

export interface User {
    _id: string;
    email: string;
    password: string;
    passwordResetToken: string;
    passwordResetExpires: Date | string;

    facebook: string;
    tokens: AuthToken[];

    profile: {
        name: string;
        gender: string;
        location: string;
        website: string;
        picture: string;
    };

    goals: Goal[]
}

export interface Profile {
    email: string;
    name: string;
    gender: string;
    location: string;
    website: string;
}