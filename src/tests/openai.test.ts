import {
  extractRole,
  extractSkills,
  extractBio,
  extractExperience,
  confirmExtraction,
  extractJobResponsibilities,
  extractJobSkills,
} from '../services/openai.service'

import {
  extractBioFixture,
  extractExperienceFixture,
  extractJobResponsibilitiesFixture,
  extractJobSkillsFixture,
  extractRoleFixture,
  extractSkillsFixture,
  confirmExtractionFixture,
} from './fixtures/openai.fixture'

describe('Extract information from the customer', () => {
  test.skip('Successful extraction of customer role', async () => {
    const result = await extractRole(extractRoleFixture)
    expect(result).not.toBe(null)
  }, 20000)

  test.skip('Successful extraction of customer skills in stored in an array', async () => {
    const result = await extractSkills(extractSkillsFixture)
    expect(result).not.toBe(null)
  }, 20000)

  test.skip('Successful extraction of customer bio for 20 words', async () => {
    const result: string = await extractBio(extractBioFixture)
    expect(result).not.toBe(null)
  }, 20000)

  test.skip('Successful extraction of customer working experience', async () => {
    const result: string = await extractExperience(extractExperienceFixture)
    expect(result).not.toBe(null)
  }, 20000)

  test.skip('Successful confirmation of complete information extraction from the customers input', async () => {
    const result: string = await confirmExtraction(confirmExtractionFixture)
    expect(result).not.toBe(null)
  }, 20000)

  test.skip('Successful extraction of job responsibilities', async () => {
    const result = await extractJobResponsibilities(
      extractJobResponsibilitiesFixture
    )
    expect(result).not.toBe(null)
  }, 15000)

  test.skip('Successful extraction of job skills', async () => {
    const result = await extractJobSkills(extractJobSkillsFixture)
    expect(result).not.toBe(null)
  }, 15000)
})
