import { response, Router } from "express"
import CreateDisciplineService from "../services/discipline/CreateDisciplineService"
import DeleteDisciplineService from "../services/discipline/DeleteDisciplineService"
import AlterDisciplineService from "../services/discipline/AlterDisciplineService"
import Discipline from '../models/Discipline'
import { getRepository } from 'typeorm'
import ensureAuthenticated from '../middlewares/ensureAuthenticated'


const disciplineRouter = Router()
disciplineRouter.use(ensureAuthenticated)

disciplineRouter.get('/', async (request, response) => {
  const schoolRepo = getRepository(Discipline);
  const schools = await schoolRepo.find();
  return response.json(schools);
});

disciplineRouter.post("/add", (request, response) => {
  try {
    const { email, discipline, description, workloader } = request.body
    const createDiscipline = new CreateDisciplineService()
    const newDiscipline = createDiscipline.execute({
      email,
      discipline,
      description,
      workloader
    })

    return response.json(newDiscipline)
  }

  catch (err) {
    return response.status(400).json({ error: err.message })
  }
})

disciplineRouter.delete('/remove/:id', async (request, response) => {
  try {
    const id = request.params.id
    const deleteDiscipline = new DeleteDisciplineService()
    const deleted = await deleteDiscipline.execute({ id })

    return response.json(deleted)

  } catch (err) {
    return response.status(400).json({ error: err.message })
  }
})

disciplineRouter.put("/update/:id", async (request, response) => {
  try {
    const id = request.params.id
    const { discipline, description, workloader } = request.body
    const alterDiscipline = new AlterDisciplineService()
    const disciplineUpdated = await alterDiscipline.execute({ id, discipline, description, workloader })

    return response.json(disciplineUpdated)

  } catch {
    return response.status(400).json({ error: Error })

  }
})

export default disciplineRouter