import {
  getFirestore,
  getDocs,
  deleteDoc,
  getDoc,
  doc,
  collection,
  query,
  where,
  addDoc,
  updateDoc,
} from 'firebase/firestore'
import firebase from '../configs/firebase.config'
import {
  extractJobPosition,
  extractJobResponsibilities,
  extractJobSkills,
  extractJobCompanyName,
} from './openai.service'
import logger from '../utils/logger.util'
import {
  ICreateJob,
  IRetrieveJobCompany,
  IRetrieveMany,
  IUpdate,
  IDelete,
  IJobApplication,
} from '../configs/interfaces.config'
import { firestore } from '../configs/firebase.config'

export async function createJob(data: ICreateJob, uid: any) {
  logger.info('User is creating a job ...')
  const jobResponsibilities: string[] = await extractJobResponsibilities(
    data.JobDescription
  )
  const jobSkills: string[] = await extractJobSkills(data.JobDescription)

  const CompanyUID: any = uid
  const CompanyProfileResult: any = await getDoc(
    doc(getFirestore(firebase), 'profile', CompanyUID)
  )
  const CompanyName: string = CompanyProfileResult.data().name

  return await addDoc(collection(getFirestore(firebase), 'jobs'), {
    companyuid: CompanyUID,
    companyName: CompanyName,
    position: data.position,
    responsibilities: data.responsibilities,
    skills: data.skills,
    jobTypes: data.jobTypes,
    Schedules: data.Schedules,
    JobDescription: data.JobDescription,
    Qualififications: data.Qualififications,
    Bonuses: data.Bonuses,
    Experince: data.Experince,
    salary: data.salary, //hourly
  })
    .then(() => {
      return {
        status: 200,
        data: {
          message: 'Job created SUCCESSFULLY!',
        },
      }
    })

    .catch(() => {
      return {
        status: 400,
        data: {
          message: 'Job creation FAILED!',
        },
      }
    })
}

export async function retrieveJob(data: IRetrieveJobCompany) {
  return await firestore
    .retrieveWhere(data)
    .then((Result) => {
      const x: any[] = []
      Result.forEach((i: any) => x.push({ id: i.id, ...i.data() }))

      if (Result.empty) {
        return {
          status: 401,
          data: 'No data was found.',
        }
      }
      return {
        status: 200,
        data: x,
      }
    })
    .catch((e) => {
      return {
        status: 400,
        data: e,
      }
    })
}

export async function updateJob(data: IUpdate) {
  return await firestore
    .update(data)
    .then((res) => {
      return {
        status: 200,
        data: {
          message: 'SUCCESSFULLY updated job!',
        },
      }
    })

    .catch(() => {
      return {
        status: 400,
        data: {
          message: 'FAILED to update a job',
        },
      }
    })
}

export async function deleteJob(data: IDelete) {
  return await firestore
    .delete(data)
    .then(() => {
      return {
        status: 200,
        data: {
          message: 'SUCCESSFULLY deleted job!',
        },
      }
    })

    .catch((e) => {
      return {
        status: 400,
        data: {
          message: 'FAILED to delete job!',
        },
      }
    })
}

export async function retrieveAllJob() {
  const data = {
    collection: 'jobs',
  }
  return await firestore
    .retrieveMany(data)
    .then((result) => {
      return {
        status: 200,
        data: result,
      }
    })

    .catch(() => {
      return {
        status: 400,
        data: {
          message: 'FAILED to retrieve all jobs!',
        },
      }
    })
}

export async function jobSuggestion(data: any) {
  const jobResponsibilities: string[] = await extractJobResponsibilities(
    data.JobDescription
  )
  const jobSkills: string[] = await extractJobSkills(data.JobDescription)
  const jobPosition: string = await extractJobPosition(data.JobDescription)
  // const CompanyName: string = await extractJobCompanyName(data.JobDescription)

  return {
    status: 200,
    data: {
      JobResponsibilities: jobResponsibilities,
      Skills: jobSkills,
      JobPosition: jobPosition,
    },
  }
}

export async function jobApplication(data: IJobApplication) {
  return await firestore
    .create(data)
    .then(() => {
      return {
        status: 200,
        data: {
          message: 'Job Successfuly applied',
        },
      }
    })

    .catch((e) => {
      return {
        status: 400,
        data: {
          message: 'Data was not saved!',
        },
      }
    })
}
