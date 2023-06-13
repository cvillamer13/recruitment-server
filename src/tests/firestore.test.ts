import { firestore } from '../configs/firebase.config'
import {
  firestoreCreateFixture,
  firestoreRetrieveOneFixture,
  firestoreRetrieveManyFixture,
  firestoreUpdateFixture,
} from './fixtures/firestore.fixture'

describe('Firestore CRUD test', () => {
  test.skip('Create', async () => {
    const result = await firestore.create(firestoreCreateFixture)
    expect(result).not.toBe(false)
  })
  test.skip('Retrieve One', async () => {
    const result = await firestore.retrieveOne(firestoreRetrieveOneFixture)
    expect(result).not.toBe(false)
  })
  test.skip('Retrieve Many', async () => {
    const result = await firestore.retrieveMany(firestoreRetrieveManyFixture)
    expect(result).not.toBe(false)
  })
  test.skip('Update', async () => {
    const result = await firestore.update(firestoreUpdateFixture)
    expect(result).not.toBe(false)
  })
})
