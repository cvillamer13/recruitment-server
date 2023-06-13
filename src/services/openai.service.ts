import generate from '../utils/openai.util'
import { OPENAI } from '../configs/constants.config'

export async function confirmExtraction(data: string) {
  const result: any = await generate(`${OPENAI.CONFIRM_EXTRACTION}: ${data}`)
  return result.data.choices[0].message.content
}

export async function extractSkills(data: string) {
  const result: any = await generate(`${OPENAI.EXTRACT_SKILLS}: ${data}`)

  const data2: string = JSON.stringify(result.data.choices[0].message.content)
  return JSON.parse(data2)
}

export async function extractRole(data: string) {
  const result: any = await generate(`${OPENAI.EXTRACT_ROLE}: ${data}`)
  return result.data.choices[0].message.content
}

export async function extractBio(data: string) {
  const result: any = await generate(`${OPENAI.EXTRACT_BIO}: ${data}`)
  return result.data.choices[0].message.content
}

export async function extractExperience(data: string) {
  // content: Find all companies he worked on: ${data}
  // content: Find all responsibilities he did: ${data}
  // content: Find the month and year when he started working at Collabera: ${data}`,
  const result: any = await generate(`${OPENAI.EXTRACT_EXPERIENCE}: ${data}`)
  return result.data.choices[0].message.content
}

// JOBS

export async function extractJobResponsibilities(data: string) {
  const result: any = await generate(
    `${OPENAI.EXTRACT_JOB_RESPONSIBILITIES}: ${data}`
  )
  const data2: string = JSON.stringify(result.data.choices[0].message.content)
  return JSON.parse(data2)
}

export async function extractJobSkills(data: string) {
  const result: any = await generate(`${OPENAI.EXTRACT_JOB_SKILLS}: ${data}`)
  const data2: string = JSON.stringify(result.data.choices[0].message.content)
  return JSON.parse(data2)
}

export async function extractJobCompanyName(data: string) {
  const result: any = await generate(
    `${OPENAI.EXTRACT_JOB_COMPANY_NAME}: ${data}`
  )

  return result.data.choices[0].message.content
}

export async function extractJobPosition(data: string) {
  const result: any = await generate(`${OPENAI.EXTRACT_JOB_POSITION}: ${data}`)

  return result.data.choices[0].message.content
}
