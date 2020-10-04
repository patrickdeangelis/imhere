import { Router } from 'express'
import CreateUserService from '../services/CreateUserService'

const userRoutes = Router()

userRoutes.post('/add', async (request, response) => {
  try {
    const { name, email, isProfessor, password } = request.body
    const createUser = new CreateUserService()
    const user = await createUser.execute({
      name,
      email,
      isProfessor,
      password
    })

    delete user.password

    return response.json(user)
  } catch (err) {
    return response.status(400).json({ error: err.message })
  }
})
export default userRoutes
