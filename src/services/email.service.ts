import {
  getFirestore,
  addDoc,
  collection,
  doc,
  updateDoc,
} from 'firebase/firestore'
import firebase from '../configs/firebase.config'

// this is experimental
export function createEmail(
  addresses: string,
  subject: string,
  message: string
) {
  return addDoc(collection(getFirestore(firebase), 'mail'), {
    to: addresses,
    message: {
      subject,
      text: '',
      html: message,
    },
  })
}

// this is experimental
export function verifyEmail(addresses: string, subject: string) {
  const message = `Hi Full Name, We received a request to verify your account. To get verified, please click the button below`
  return addDoc(collection(getFirestore(firebase), 'mail'), {
    to: addresses,
    message: {
      subject,
      text: '',
      html: message,
    },
  })
}

// this is experimental
export function approveIntroduction(user: any) {
  const message =
    'Congratulations! We have already verified your introduction video and companies across the glow will now see it.'
  updateDoc(doc(getFirestore(firebase), `users/${user[0]}`), {
    verified: true,
    updatedAt: new Date(),
  })

  // send email
  // introduction doesnt have a control wether verified or not yet
  return addDoc(collection(getFirestore(firebase), 'mail'), {
    to: [user[1].email],
    message: {
      subject: 'Introduction Approved!',
      html: message,
    },
  })
}
