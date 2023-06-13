import firebase from '../configs/firebase.config'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getAuth,
} from 'firebase/auth'
import { ISignIn, ISignUp } from '../configs/interfaces.config'

export const Auth = {
  async signIn(data: ISignIn) {
    return await signInWithEmailAndPassword(
      getAuth(firebase),
      data.email,
      data.password
    )
  },

  async signUp(data: ISignUp) {
    return await createUserWithEmailAndPassword(
      getAuth(firebase),
      data.email,
      data.password
    )
  },
}
