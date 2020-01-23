import axios from "axios";

interface SignupInfo {
    email: string,
    password: string,
    confirmPassword: string
}

interface LoginInfo {
    email: string,
    password: string
}

interface Goal {
    goal: string,
    completionDate: Date,
    steps: {
        miniGoal: string,
        completionDate: Date
    }[],
    costLoss: string[],
    costGain: string[],
    userId: string
}

class apiService {
    public signup(signupInfo: SignupInfo) {
        return axios.post("/signup", signupInfo);
    }

    public login(loginInfo: LoginInfo) {
        return axios.post("/login", loginInfo);
    }

    public logout() {
        return axios.get("/api/users/logout");
    }

    public isLoggedIn() {
        return axios.get("/api/users/profile");
    }

    public addGoal(goal: Goal) {
        return axios.post("/api/goal", goal)
    }

    public updateGoal(goal: Goal, goalId: string) {
        return axios.put(`/api/goal/${goalId}`, goal)
    }

    public deleteGoal(goalId: string) {
        return axios.delete(`/api/goal/${goalId}`)
    }

    public getGoals(userId: string) {
        return axios.get(`/api/goals/${userId}`)
    }
}

export const API = new apiService();