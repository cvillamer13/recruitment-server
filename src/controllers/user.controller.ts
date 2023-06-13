import { Request, Response } from 'express'
import { signUp as SignUp, signIn as SignIn } from '../services/user.service'

export async function signUp(req: Request, res: Response) {
  const result = await SignUp(req.body)
  return res.status(result.status).send(result.data)
}

export async function signIn(req: Request, res: Response) {
  const result = await SignIn(req.body)
  return res.status(result.status).send(result.data)
}
