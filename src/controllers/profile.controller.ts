import { NextFunction, Request, Response } from 'express'
import { tokenValidation } from '../middlewares/tokenValidation.middleware'
import {
  retrieveProfile as RetrieveProfile,
  createProfile as CreateProfile,
  updateProfile as UpdateProfile,
  deleteProfile as DeleteProfile,
  updateProfilePicture as UpdateProfilePicture,
  updateProfileWorkspace as UpdateProfileWorkspace,
  updateProfileIntroduction as UpdateProfileIntroduction,
} from '../services/profile.service'

export async function createProfile(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const userId = res.locals.userId
  const result = await CreateProfile(req.body, userId)
  return res.status(result.status).send(result.data)
}

export async function retrieveProfile(req: Request, res: Response) {
  const userId = res.locals.userId
  // const result = await RetrieveProfile(req.params.id)
  const result = await RetrieveProfile(userId)
  return res.status(result.status).send(result.data)
}

export async function updateProfile(req: Request, res: Response) {
  const result = await UpdateProfile(req.body)
  return res.status(result.status).send(result.data)
}

export async function deleteProfile(req: Request, res: Response) {
  const result = await DeleteProfile(req.params.profileId)
  return res.status(result.status).send(result.data)
}

// more

export async function updateProfilePicture(req: Request, res: Response) {
  const data = req.body
  data.jobId = req.params.jobId
  const result = await UpdateProfilePicture(data)
  return res.status(result.status).send(result.data)
}

export async function updateProfileWorkspace(req: Request, res: Response) {
  const data = req.body
  data.jobId = req.params.jobId
  const result = await UpdateProfileWorkspace(data)
  return res.status(result.status).send(result.data)
}

export async function updateProfileIntroduction(req: Request, res: Response) {
  const data = req.body
  data.jobId = req.params.jobId
  const result = await UpdateProfileIntroduction(data)
  return res.status(result.status).send(result.data)
}
