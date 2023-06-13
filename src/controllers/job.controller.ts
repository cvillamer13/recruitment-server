import { Request, Response } from 'express'
import { tokenValidation } from '../middlewares/tokenValidation.middleware'
import {
  createJob as CreateJob,
  retrieveJob as RetrieveJob,
  updateJob as UpdateJob,
  deleteJob as DeleteJob,
  retrieveAllJob as RetrieveAllJob,
  jobSuggestion,
} from '../services/job.service'

export async function createJob(req: Request, res: Response) {
  const userId = res.locals.userID
  const result = await CreateJob(req.body.message, userId)
  return res.status(result.status).send(result.data)
}

export async function retrieveJob(req: Request, res: Response) {
  const data = req.body
  const result = await RetrieveJob(data)
  return res.status(result.status).send(result.data)
}

export async function updateJob(req: Request, res: Response) {
  const data = req.body
  data.jobId = req.params.jobId
  const result = await UpdateJob(data)
  return res.status(result.status).send(result.data)
}

export async function deleteJob(req: Request, res: Response) {
  const result = await DeleteJob(req.body)
  return res.status(result.status).send(result.data)
}

// more

export async function retrieveAllJob(req: Request, res: Response) {
  const result = await RetrieveAllJob()
  return res.status(result.status).send(result.data)
}

export async function jobAISuggest(req: Request, res: Response) {
  const data = req.body
  const result = await jobSuggestion(data)
  return res.status(result.status).send(result.data)
}
