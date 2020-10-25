import { Router } from 'express'
import SessionUserService from '../services/sessions/SessionUserService'

const sessionRoutes = Router()

sessionRoutes.post('/', async (request, response) => {
  try {
    const { email, password } = request.body
    const sessionAuthenticate = new SessionUserService()

    const { user, token } = await sessionAuthenticate.execute({
      email,
      password
    })

    delete user.password

    return response.json({ user, token })
  } catch (err) {
    return response.status(400).json({ error: err.message })
  }
})

export default sessionRoutes
