import { Router } from 'express'
import CreateUsersServices from '../services/CreateUsersServices'

const userRoutes = Router()

userRoutes.post('/add', async (request, response) => {
  try {
    const { nameUser, email, isProfessor, password } = request.body
    const createUser = new CreateUsersServices()
    const user = await createUser.execute({
      nameUser,
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
