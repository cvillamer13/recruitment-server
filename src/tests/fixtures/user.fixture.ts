import { v4 as uuidV4 } from 'uuid'
import { faker } from '@faker-js/faker'

export const signInFixture = {
  email: 'cvillamer31@gmail.com',
  password: '123456',
}

export const signUpTalentFixture = {
  email: faker.internet.email(),
  password: uuidV4(),
  role: 2,
}

export const signUpCompanyFixture = {
  email: faker.internet.email(),
  password: uuidV4(),
  role: 1,
}
