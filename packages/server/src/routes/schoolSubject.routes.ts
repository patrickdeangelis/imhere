import { response, Router } from "express"
import CreateSchoolSubjectService from "../services/CreateSchoolSubjectService"
import DeleteSchoolSubjectService from "../services/DeleteSchoolSubjectService"
import AlterSchoolSubjectService from "../services/AlterSchoolSubjectService"
import SchoolSubject from '../models/SchoolSubject'
import { getRepository } from 'typeorm'
import ensureAuthenticated from '../middlewares/ensureAuthenticated'


const schoolSubjectRouter = Router()
schoolSubjectRouter.use(ensureAuthenticated)

schoolSubjectRouter.get('/', async (request, response) => {
  const schoolRepo = getRepository(SchoolSubject);
  const schools = await schoolRepo.find();
  return response.json(schools);
});

schoolSubjectRouter.post("/add", (request, response) => {
  try {
    const { email, schoolsubject, description, workloader } = request.body
    const createSchoolSubject = new CreateSchoolSubjectService()
    const discipline = createSchoolSubject.execute({
      email,
      schoolsubject,
      description,
      workloader
    })
    // const { id_s }
    return response.json(discipline)
  }

  catch (err) {
    return response.status(400).json({ error: err.message })
  }
})

schoolSubjectRouter.delete('/remove/:id', async (request, response) => {
  try{
    const id = request.params.id
    const deleteSchoolSubject = new DeleteSchoolSubjectService()
    const deleted = await deleteSchoolSubject.execute({ id })

    return response.json(deleted)

  } catch {
    return response.status(400).json({ error: err.message })
  }
})

schoolSubjectRouter.put("/update/:id", async (request, response) => {
  try{
    const id = request.params.id
    const {schoolsubject, workloader} = request.body
    const alterSchoolSubject = new AlterSchoolSubjectService()
    const discipline = await alterSchoolSubject.execute({ id, schoolsubject, workloader })

    return response.json(discipline)

  } catch {
    return response.status(400).json({ error: err.message })

  }
})

export default schoolSubjectRouter