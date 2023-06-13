import { Request, Response } from 'express'
// import { validateEmail } from '../validators/user.validator'

export async function getAllEmails(req: Request, res: Response) {
  res.send('Getting all Email')
}

export async function getEmailById(req: Request, res: Response) {
  const { id } = req.params
  if (!id)
    return res.status(404).send('The email with the given ID was not found.')
  res.send(`Getting email with id ${id}`)
}

export async function createEmail(req: Request, res: Response) {
  // const { error } = validateEmail(req.body)
  // if (error) return res.status(400).send(error.details[0].message)

  const { email, password } = req.body
  res.send(`Creating email with ${email}`)
}

export async function updateEmailById(req: Request, res: Response) {
  const { id } = req.params
  if (!id)
    return res.status(404).send('The email with the given ID was not found.')

  // const { error } = validateEmail(req.body)
  // if (error) return res.status(400).send(error.details[0].message)

  const { email, password } = req.body
  res.send(`Updating email with id ${id} to have email ${email}`)
}

export async function deleteEmailById(req: Request, res: Response) {
  const { id } = req.params
  if (!id)
    return res.status(404).send('The email with the given ID was not found.')

  res.send(`The email with ${id} id is deleted`)
}
