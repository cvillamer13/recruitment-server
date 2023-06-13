const OPENAI = {
  CONFIRM_EXTRACTION:
    'Say yes if the message has job title, companies, date of start, and skills. Else, say no',
  EXTRACT_SKILLS: 'Find all skills and store in an array',
  EXTRACT_ROLE: 'Find the job title only',
  EXTRACT_BIO: 'Create a max of 20 words bio and make it persuasive',
  EXTRACT_EXPERIENCE: 'Find all companies he worked on',
  EXTRACT_JOB_RESPONSIBILITIES:
    'Extract job responsibilities, max of 40 characters each, and store as stringified array',
  EXTRACT_JOB_SKILLS:
    'Extract technical job skills, max of 12 characters each, and store as stringified array',
  EXTRACT_JOB_COMPANY_NAME: 'Find the company name, else say No Company Found',
  EXTRACT_JOB_POSITION:
    'Find only the exact position title needed for the job, max of 30 characters',
}

const SUCCESS_MESSAGE = {
  // PROFILE
  CREATE_PROFILE: 'Profile Created!',
  RETRIEVE_PROFILE: 'Profile Retrieved!',
  UPDATE_PROFILE: 'Profile Updated!',
  DELETE_PROFILE: 'Profile Deleted!',

  // JOB

  // USER

  // EMAIL
}

const FAILED_MESSAGE = {
  // PROFILE
  CREATE_PROFILE: 'Failed To Create Profile!',
  RETRIEVE_PROFILE: 'Failed To Retrieve Profile!',
  UPDATE_PROFILE: 'Failed To Update Profile!',
  DELETE_PROFILE: 'Failed To Delete Profile!',

  // JOB

  // USER

  // EMAIL
}

const STATUS = {
  SUCCESS: 200,
  FAILED: 400,
}

export { OPENAI, SUCCESS_MESSAGE, FAILED_MESSAGE, STATUS }
