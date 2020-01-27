import axios from "axios";
import {SignupInfo, LoginInfo, Goal} from "../types";

class apiService {
    public signup(signupInfo: SignupInfo) {
        return axios.post("/signup", signupInfo);
    }

    public login(loginInfo: LoginInfo) {
        return axios.post("/login", loginInfo);
    }

    public logout() {
        return axios.get("/logout");
    }

    public isLoggedIn() {
        return axios.get("/user/loggedin");
    }

    public getUserGoals(userId: string) {
        return axios.get(`/user/goals/${userId}`);
    }

    public postGoal(goal: Goal) {
        return axios.post("/goal", goal)
    }

    public updateGoal(goal: Goal, goalId: string) {
        return axios.post(`/goal/${goalId}`, goal)
    }

    public deleteGoal(goalId: string) {
        return axios.delete(`/goal/${goalId}`)
    }

    public getGoals(userId: string) {
        return axios.get(`/goals/${userId}`)
    }
}

export const API = new apiService();