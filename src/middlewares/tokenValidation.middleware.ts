import { Request, Response, NextFunction } from 'express'
import { getAuth } from 'firebase-admin/auth'

export async function tokenValidation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader: any = req.headers['authorization']
  const token = authHeader.split(' ')[1]
  const results = await getAuth().verifyIdToken(token)
  res.locals.userId = results.uid
  next()
}
