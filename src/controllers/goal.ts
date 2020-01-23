import { Goal} from '../models/Goal';
import { User } from '../models/User';
import { Request, Response, NextFunction } from "express";
import { WriteError } from "mongodb";


export const postGoal = (req: Request, res: Response) => {
    const { goal, completionDate, steps, costLoss, costGain, user } = req.body
    const newGoal = new Goal({
        goal, 
        completionDate,
        steps, 
        costLoss,
        costGain,
        user
    })

    newGoal.save()
        .then(goal => {
            User.findByIdAndUpdate({ _id: user }, { $push: { goals: goal._id } })
                .then(user => res.status(200).send({goal, user}))
                .catch(err => res.send(err))
        })
        .catch(err => res.send(err))
}

export const getGoal = (req: Request, res: Response) => {
    Goal.findById(req.params.goalId)
      .then(goal => res.send(goal))
      .catch(err => res.send(err))
  }

  export const updateGoal = (req: Request, res: Response) => {
    const { goalId, goal, completionDate, steps, costLoss, costGain } = req.body;
    Goal.findByIdAndUpdate({ _id: goalId }, { goal, completionDate, steps, costLoss, costGain })
      .then(goal => res.status(200).send(goal))
      .catch(err => res.send(err))
  }

  export const deleteGoal = (req: Request, res: Response) => {
    Goal.findByIdAndDelete(req.body.goalId) 
      .then(goal => res.send({deleted: goal}))
      .catch(err => res.send(err))
  }

  export const getGoals = (req: Request, res: Response) => {
    Goal.find({ user: req.params.userId })
      .then(goals => res.status(200).send(goals))
      .catch(err => res.send(err))
  }