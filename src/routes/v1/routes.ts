import { Router, Request, Response } from 'express'

import { signUp, signIn } from '../../controllers/user.controller'

import { tokenValidation } from '../../middlewares/tokenValidation.middleware'

import {
  createProfile,
  retrieveProfile,
  updateProfile,
  deleteProfile,
  updateProfilePicture,
  updateProfileWorkspace,
  updateProfileIntroduction,
} from '../../controllers/profile.controller'

import {
  getAllEmails,
  getEmailById,
  createEmail,
  updateEmailById,
  deleteEmailById,
} from '../../controllers/email.controller'

import {
  retrieveAllJob,
  retrieveJob,
  createJob,
  updateJob,
  deleteJob,
  jobAISuggest,
} from '../../controllers/job.controller'

const router = Router()

router
  //User
  .post('/user/sign-up', signUp)
  .post('/user/sign-in', signIn)

  // Profile
  // .use(tokenValidation)
  .get('/profile', tokenValidation, retrieveProfile)
  .post('/profile', tokenValidation, createProfile)
  .put('/profile/:profileId', updateProfile)
  .patch('/profile/picture/:profileId', updateProfilePicture)
  .patch('/profile/workspace/:profileId', updateProfileWorkspace)
  .patch('/profile/introduction/:profileId', updateProfileIntroduction) // video
  .delete('/profile/:profileId', deleteProfile)

  // Notification Email Service
  .get('/email', getAllEmails)
  .get('/email/:id', getEmailById)
  .post('/email/:id', createEmail)
  .patch('/email', updateEmailById)
  .delete('/email', deleteEmailById)

  //Job
  .post('/job', tokenValidation, createJob)
  .get('/job/:jobID', retrieveJob)
  .put('/job/:jobID', updateJob)
  .delete('/job/:jobID', deleteJob)
  .get('/job', retrieveAllJob)
  .post('/job/jobSuggestion', jobAISuggest)

  // Health Check
  .get('/health', (req: Request, res: Response) => {
    res.status(200).send({
      message: 'Server response!',
    })
  })

export default router
