import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from 'firebase/firestore'
import firebase from '../configs/firebase.config'

// this is going to retrieve all users that are not verified yet
export async function retrieveAllUnverifiedUsers() {
  return await getDocs(
    query(
      collection(getFirestore(firebase), 'users'),
      where('verified', '==', false)
    )
  )
    .then((results) => {
      const x: any[] = []
      results.forEach((i) => x.push([i.id, i.data()]))
      return {
        status: 200,
        data: x,
      }
    })

    .catch((e) => {
      return {
        status: 400,
        data: {},
      }
    })
}
