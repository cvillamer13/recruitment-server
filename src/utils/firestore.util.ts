import firebase from '../configs/firebase.config'
import { addDoc, collection, getFirestore } from 'firebase/firestore'

export default class Firestore {
  firebase: any

  constructor() {
    this.firebase = firebase
  }
  create(path: string, data: object) {
    addDoc(collection(getFirestore(this.firebase), path), data)
  }

  retrieve() {}

  update() {}

  delete() {}
}
