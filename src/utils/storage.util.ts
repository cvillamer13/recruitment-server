import firebase from '../configs/firebase.config'
import mime from 'mime'
import { uploadBytes, ref, getStorage } from 'firebase/storage'
import { readFileSync } from 'fs'

export default class Storage {
  firebase: any

  constructor() {
    this.firebase = firebase
  }

  create(data: any) {
    const mimeType = mime.getType(data.file)

    const newMetadata: any = {
      cacheControl: 'public,max-age=300',
      contentType: mimeType,
    }

    uploadBytes(
      ref(getStorage(this.firebase), `${data.path}/${data.id}`),
      readFileSync(data.file),
      newMetadata
    )
  }

  retrieve() {}

  update() {}

  delete() {}
}
