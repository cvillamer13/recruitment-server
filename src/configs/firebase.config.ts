import { initializeApp } from 'firebase/app'
import dotenv from 'dotenv'
import {
  ICreate,
  IRetrieveOne,
  IRetrieveMany,
  IUpdate,
  IDelete,
  IRetrieveWhere,
} from './interfaces.config'
dotenv.config()
import * as admin from 'firebase-admin'
import * as serviceAccount from './service-account.json'
// we are going to use secrets manager to hide these credentials ...

const firebase = initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
})

const firebaseAdmin = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
})

const firestore = {
  create: async (data: ICreate) => {
    return await firebaseAdmin
      .firestore()
      .collection(data.collection)
      .add(data.data)
      .then(() => {
        return true
      })
      .catch(() => {
        return false
      })
  },
  retrieveOne: async (data: IRetrieveOne) => {
    return await firebaseAdmin
      .firestore()
      .collection(data.collection)
      .doc(data.id)
      .get()
      .then((result: any) => {
        return result
      })
      .catch(() => {
        return false
      })
  },
  retrieveMany: async (data: IRetrieveMany) => {
    return await firebaseAdmin
      .firestore()
      .collection(data.collection)
      .get()
      .then((result: any) => {
        const handler: any[] = []
        result.forEach((i: any) => {
          handler.push({ id: i.id, ...i.data() })
        })
        return handler
      })
      .catch(() => {
        return false
      })
  },
  update: async (data: IUpdate) => {
    return await firebaseAdmin
      .firestore()
      .collection(data.collection)
      .doc(data.id)
      .update(data.data)
      .then(() => {
        return true
      })
      .catch(() => {
        return false
      })
  },
  delete: async (data: IDelete) => {
    return await firebaseAdmin
      .firestore()
      .collection(data.collection)
      .doc(data.id)
      .delete()
      .then(() => {
        return true
      })
      .catch(() => {
        return false
      })
  },
  retrieveWhere: async (data: IRetrieveWhere) => {
    return await firebaseAdmin
      .firestore()
      .collection(data.collection)
      .where(data.where.column, data.where.expression, data.where.value)
      .get()
      .then((result: any) => {
        return result
      })
      .catch(() => {
        return false
      })
  },
  // retireSearch: async(data: any){
  //   return await firebaseAdmin
  //   .child
  // }
}

export default firebase
export { firestore }
