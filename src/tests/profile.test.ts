import { createProfile } from '../services/profile.service'

import { TokenFixture } from './fixtures/profile.fixtures'

describe('Retrieve A Profile', () => {
  test.skip('SUCCESSFUL', async () => {
    // do your logic here ...
    const uid = 'EyXa7w0KqcOnwDwDBWsrDZA3sOU2'
    const result2: any = await createProfile(TokenFixture, uid)
    expect(result2.status).toBe(200)
  })
})
