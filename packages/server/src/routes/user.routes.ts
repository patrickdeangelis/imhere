import { response, Router } from 'express'
import CreateUserService from '../services/CreateUserService'
import DeleteUserService from '../services/DeleteUserService'
import AlterUserService from '../services/AlterUserService'
import ensureAuthenticated from '../middlewares/ensureAuthenticated'

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
userRoutes.use(ensureAuthenticated)
userRoutes.delete('/remove/:id/:password', async (request, response) => {
  try {
    const { id, password } = request.params
    const deleteUser = new DeleteUserService()
    const deleted = await deleteUser.execute({
      id,
      password
    })

    return response.json(deleted)

  } catch (err) {
    return response.status(400).json({ error: err.message })
  }
})
userRoutes.put('/update/:id', (request, response) => {
  try {
    const id = request.params.id
    const {name, email, isProfessor, password} = request.body
    const alterUser = new AlterUserService()
    const user = alterUser.execute({
      id,
      name,
      email,
      isProfessor,
      password
    })

    return response.json(user)
  }catch {
    return response.status(400).json({ error: err.message })
  }

})
export default userRoutes
