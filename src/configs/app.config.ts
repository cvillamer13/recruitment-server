import express, { Express } from 'express'
import cors from 'cors'
import routes from '../routes/v1/routes'
import rateLimit from 'express-rate-limit'

const app: Express = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
  cors({
    origin: '*',
  })
)

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }))

// please add security features here using helmet library ...

app.use('/v1', routes)

// health check
app.get('/', (req, res) => {
  return res.status(200).send({
    message: 'Working!',
  })
})

export default app
