import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  UserCredential,
} from 'firebase/auth'

import firebase from '../configs/firebase.config'
import {
  getFirestore,
  doc,
  setDoc,
  updateDoc,
  getDoc,
} from 'firebase/firestore'
import { ISignUp, ISignIn, IUserId, IToken } from '../configs/interfaces.config'
import logger from '../utils/logger.util'

export async function signUp(data: ISignUp) {
  logger.info('User signing up ...')

  try {
    const result: any = await createUserWithEmailAndPassword(
      getAuth(firebase),
      data.email,
      data.password
    )
    logger.info('User account added!')
    await sendEmailVerification(result.user)
    logger.info('Email verification sent!')
    await setDoc(doc(getFirestore(firebase), 'users', result.user.uid), {
      email: data.email,
      skills: [],
      verified: false,
      availability: 'Full-time',
      role: data.role,
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    logger.info('User SUCCESSFULLY signed up!')

    return {
      status: 200,
      data: {
        token: result.user.stsTokenManager.accessToken,
      },
    }
  } catch (e: any) {
    logger.error('User FAILED to sign up!')
    return {
      status: 400,
      data: {
        error: e.code,
      },
    }
  }
}

export async function signIn(data: ISignIn) {
  logger.info('User trying to sign in ...')
  return await signInWithEmailAndPassword(
    getAuth(firebase),
    data.email,
    data.password
  )
    .then((result: any) => {
      logger.info('User SUCCESSFULLY signed up!')
      return {
        status: 200,
        data: {
          token: result.user.stsTokenManager.accessToken,
        },
      }
    })
    .catch((e) => {
      logger.error('User FAILED to sign up!')
      return {
        status: 400,
        data: {
          error: e.code,
        },
      }
    })
}

export async function getDataUser(data: IUserId) {
  return await getDoc(doc(getFirestore(firebase), 'users', data.uid))
    .then((result) => {
      return {
        status: 200,
        data: { userId: result.id, ...result.data() },
      }
    })

    .catch(() => {
      return {
        status: 400,
        data: {
          message: 'No Profile Found!',
        },
      }
    })
}
