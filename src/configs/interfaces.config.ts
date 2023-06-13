import { Response } from 'express'
export interface ICreateProfile {
  bio: string
  link: string
  rate: any // hourly
  skills: string[]
  pictureURL: string
  workspaceURL: string
  introductionURL: string
}

export interface IUpdateProfile {
  profileId: string
  bio: string
  link: string
  rate: any // hourly
  skills: string[]
  pictureURL: string
  workspaceURL: string
  introductionURL: string
}

export interface IUploadIntroduction {
  profileId: string
  file: any
}

export interface IUpdateInformationAbout {
  profileId: string
  about: string
}

export interface ISignUp {
  email: string
  password: string
  role: number
}

export interface ISignIn {
  email: string
  password: string
}

export interface IUploadResume {
  profileId: string
  file: any
}

export interface IUploadProfilePic {
  profileId: string
  file: any
}

// created by Alden, don't remove
export interface IProfile {
  name: string
  email: string
  phone: string
  media: {
    validateIdUrl: string
    photoURL: string
    workspaceURL: string
  }
  rate: {
    hourly: number
    daily: number
    weekly: number
    monthly: number
    yearly: number
  }
}

export interface IJobExp {
  profileId: string
  company: string
  MonthFrom: number
  YearFrom: number
  MonthTo: number
  YearTo: number
  description: any
  skills: any
  availability: any
}

export interface ICreate {
  collection: string
  data: object
}

export interface IRetrieveOne {
  collection: string
  id: string
}

export interface IRetrieveMany {
  collection: string
}

export interface IRetrieveBy {
  collection: string
  key: string
  condition: string
  value: string
}

export interface IUpdate {
  collection: string
  id: string
  data: object
}

export interface IDelete {
  collection: string
  id: string
}
export interface IRetrieveWhere {
  collection: any
  where: any
}
export interface IUserId {
  uid: any
}

export interface IToken {
  accessToken: any
}

export interface UIDRequest extends Response {
  userId: any
}

export interface ICreateJob {
  salary: string | number
  position: string
  responsibilities: any
  skills: any
  jobTypes: string[]
  Schedules: string[]
  JobDescription: string
  Qualififications: any
  Bonuses: string[]
  Experince: string[]
}

export interface IRetrieveJobCompany {
  collection: string
  where: {
    column: string
    expression: any
    value: any
  }
}

export interface IJobApplication {
  collection: string
  data: {
    companyuid: string
    Applicantiid: string
    JobId: string
    CoverLetter: string
    status: string
  }
}
