import { signIn, signUp } from '../services/user.service'
import {
  signInFixture,
  signUpTalentFixture,
  signUpCompanyFixture,
} from './fixtures/user.fixture'

describe('User Tests', () => {
  test.skip('Sign in user', async () => {
    const result = await signIn(signInFixture)
    expect(result.status).toBe(200)
  })

  test.skip('Sign up a talent', async () => {
    const result = await signUp(signUpTalentFixture)
    expect(result.status).toBe(200)
  })

  test.skip('Sign up a company', async () => {
    const result = await signUp(signUpCompanyFixture)
    expect(result.status).toBe(200)
  })
})
