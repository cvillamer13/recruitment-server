import {
  createJob,
  retrieveJob,
  retrieveAllJob,
  updateJob,
  deleteJob,
  jobSuggestion,
  jobApplication,
} from '../services/job.service'
import {
  CreateJob,
  RetrieveJobCompany,
  RetrieveAlljob,
  FixUpdateJob,
  Deletejob,
  JobDescriptionAI,
  JobApplication,
} from './fixtures/openai.fixture'

describe('Jobs Tests', () => {
  test.skip('Creating Job', async () => {
    const uid = 'EyXa7w0KqcOnwDwDBWsrDZA3sOU2'
    const result = await createJob(CreateJob, uid)
    expect(result.status).toBe(200)
  }, 80_000)

  test.skip('Retrieve Job Company', async () => {
    const result = await retrieveJob(RetrieveJobCompany)
    expect(result.status).toBe(200)
  }, 80_000)

  test.skip('Retrieve All job', async () => {
    const result = await retrieveAllJob()
    console.log(result)
    expect(result.status).toBe(200)
  }, 80_000)

  test.skip('Update job', async () => {
    const result = await updateJob(FixUpdateJob)
    expect(result.status).toBe(200)
  }, 80_000)

  test.skip('Delete job', async () => {
    const result = await deleteJob(Deletejob)
    expect(result.status).toBe(200)
  }, 80_000)

  test.skip('job Suggestion openAI', async () => {
    const result: any = await jobSuggestion(JobDescriptionAI)
    console.log(result)
    expect(result.status).toBe(200)
  }, 80_000)

  test.skip('job Application', async () => {
    const result: any = await jobApplication(JobApplication)
    console.log(result)
    expect(result.status).toBe(200)
  }, 80_000)
})
