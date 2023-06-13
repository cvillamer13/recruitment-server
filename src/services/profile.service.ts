import {
  getFirestore,
  doc,
  getDoc,
  updateDoc,
  setDoc,
  deleteDoc,
  collection,
  addDoc,
} from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import firebase from '../configs/firebase.config'
import { readFileSync } from 'node:fs'
import mime from 'mime'

import {
  FAILED_MESSAGE,
  SUCCESS_MESSAGE,
  STATUS,
} from '../configs/constants.config'

import {
  ICreateProfile,
  IUpdateProfile,
  IUploadIntroduction,
  IUpdateInformationAbout,
  IUploadResume,
  IUploadProfilePic,
  IJobExp,
} from '../configs/interfaces.config'

export async function createProfile(data: ICreateProfile, userId: any) {
  console.log(userId)
  return await addDoc(collection(getFirestore(firebase), 'profile'), data)
    .then(() => {
      return {
        status: STATUS.SUCCESS,
        data: {
          message: SUCCESS_MESSAGE.CREATE_PROFILE,
        },
      }
    })

    .catch(() => {
      return {
        status: STATUS.FAILED,
        data: {
          message: FAILED_MESSAGE.CREATE_PROFILE,
        },
      }
    })
}

export async function retrieveProfile(data: string) {
  return await getDoc(doc(getFirestore(firebase), 'users', data))
    .then((result) => {
      return {
        status: STATUS.SUCCESS,
        data: { profileId: result.id, ...result.data() },
      }
    })

    .catch(() => {
      return {
        status: STATUS.FAILED,
        data: {
          message: FAILED_MESSAGE.RETRIEVE_PROFILE,
        },
      }
    })
}

export async function updateProfile(data: IUpdateProfile) {
  return await updateDoc(doc(getFirestore(firebase), 'users', data.profileId), {
    bio: data.bio,
    link: data.link,
    skills: data.skills,
    pictureURL: data.pictureURL,
    workspaceURL: data.workspaceURL,
    introductionURL: data.introductionURL,
    rate: {
      hourly: parseInt(data.rate),
      daily: parseInt(data.rate) * 8, // hourly rate multiply by 8 hours
      weekly: parseInt(data.rate) * 40, // hourly rate multiply by 40 hours
      monthly: parseInt(data.rate) * 160, // hourly rate multiply by 160 hours
      yearly: parseInt(data.rate) * 1920, // hourly rate multiply by 1920 hours
    },
  })
    .then(() => {
      return {
        status: STATUS.SUCCESS,
        data: {
          message: SUCCESS_MESSAGE.UPDATE_PROFILE,
        },
      }
    })

    .catch((e) => {
      return {
        status: STATUS.FAILED,
        data: {
          message: FAILED_MESSAGE.UPDATE_PROFILE,
        },
      }
    })
}

export async function deleteProfile(data: string) {
  return await deleteDoc(doc(getFirestore(firebase), 'users', data))
    .then(() => {
      return {
        status: STATUS.SUCCESS,
        data: {
          message: SUCCESS_MESSAGE.DELETE_PROFILE,
        },
      }
    })

    .catch(() => {
      return {
        status: STATUS.FAILED,
        data: {
          message: FAILED_MESSAGE.DELETE_PROFILE,
        },
      }
    })
}

// more

export async function updateProfileIntroduction(data: IUploadIntroduction) {
  const mimeType = mime.getType(data.file)

  const newMetadata: any = {
    cacheControl: 'public,max-age=300',
    contentType: mimeType,
  }

  // upload the file to Firebase Storage
  return await uploadBytes(
    ref(getStorage(firebase), `introductions/${data.profileId}`),
    readFileSync(data.file),
    newMetadata
  )
    .then(() => {
      // get file URL
      getDownloadURL(
        ref(getStorage(firebase), `introductions/${data.profileId}`)
      ).then((introduction) => {
        // record the URL to firestore
        updateDoc(doc(getFirestore(firebase), 'users', data.profileId), {
          introductionURL: introduction,
        })
      })

      return {
        status: 200,
        data: {
          uid: data.profileId,
          message: 'Upload Introduction Success',
        },
      }
    })

    .catch((e) => {
      return {
        status: 400,
        data: {
          message: e.code,
        },
      }
    })
}

export function updateInformationAbout(data: IUpdateInformationAbout) {
  return updateDoc(doc(getFirestore(firebase), 'users', data.profileId), {
    about: data.about,
  })
}

export async function uploadResume(data: IUploadResume) {
  //required natin naka PDF Yung pag upload ng resume
  const newMetadata = {
    cacheControl: 'public,max-age=300',
    contentType: 'application/pdf',
  }

  return await uploadBytes(
    ref(getStorage(firebase), `resume/${data.profileId}`),
    readFileSync(data.file),
    newMetadata
  )
    .then((result) => {
      // get file URL
      getDownloadURL(
        ref(getStorage(firebase), `resume/${data.profileId}`)
      ).then((resume) => {
        // record the URL to firestore
        updateDoc(doc(getFirestore(firebase), 'users', data.profileId), {
          resume,
        })
      })

      return {
        status: 200,
        uid: data.profileId,
        message: 'Upload Resume Success',
      }
    })

    .catch((e) => {
      return {
        status: 400,
        message: e.code,
      }
    })
}

export async function updateProfilePicture(data: IUploadProfilePic) {
  const mimeType = mime.getType(data.file)

  const newMetadata: any = {
    cacheControl: 'public,max-age=300',
    contentType: mimeType,
  }
  //required natin naka PDF Yung pag upload ng resume
  return await uploadBytes(
    ref(getStorage(firebase), `ProfilePics/${data.profileId}`),
    readFileSync(data.file),
    newMetadata
  )
    .then((result) => {
      // get file URL
      getDownloadURL(
        ref(getStorage(firebase), `ProfilePics/${data.profileId}`)
      ).then((ProfilePics) => {
        // record the URL to firestore
        updateDoc(doc(getFirestore(firebase), 'users', data.profileId), {
          ProfilePics,
        })
      })

      return {
        status: 200,
        data: {
          uid: data.profileId,
          message: 'Upload Profile Picture Success',
        },
      }
    })

    .catch((e) => {
      return {
        status: 400,
        data: {
          message: e.code,
        },
      }
    })
}

export async function updateProfileWorkspace(data: IUploadProfilePic) {
  const mimeType = mime.getType(data.file)

  const newMetadata: any = {
    cacheControl: 'public,max-age=300',
    contentType: mimeType,
  }
  //required natin naka PDF Yung pag upload ng resume
  return await uploadBytes(
    ref(getStorage(firebase), `ProfilePics/${data.profileId}`),
    readFileSync(data.file),
    newMetadata
  )
    .then((result) => {
      // get file URL
      getDownloadURL(
        ref(getStorage(firebase), `ProfilePics/${data.profileId}`)
      ).then((ProfilePics) => {
        // record the URL to firestore
        updateDoc(doc(getFirestore(firebase), 'users', data.profileId), {
          ProfilePics,
        })
      })

      return {
        status: 200,
        data: {
          uid: data.profileId,
          message: 'Upload Profile Picture Success',
        },
      }
    })

    .catch((e) => {
      return {
        status: 400,
        data: {
          message: e.code,
        },
      }
    })
}

export async function AddJobExperience(data: IJobExp) {
  return await setDoc(doc(getFirestore(firebase), 'JobExp', data.profileId), {
    company: data.company,
    MonthFrom: data.MonthFrom,
    YearFrom: data.YearFrom,
    MonthTo: data.MonthTo,
    YearTo: data.YearTo,
    description: data.description,
    skills: data.skills,
    availability: data.availability,
    createdAt: new Date(),
    updatedAt: new Date(),
  })
    .then((result) => {
      return {
        status: 200,
        data: {
          userId: data.profileId,
          message: 'Successfully Added record!',
        },
      }
    })
    .catch((err) => {
      return {
        status: 400,
        data: {
          error: err.code,
        },
      }
    })
}
