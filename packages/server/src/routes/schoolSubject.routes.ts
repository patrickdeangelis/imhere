import { Router } from "express"
import CreateSchoolSubjectService from "../services/CreateSchoolSubjectService"
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

export default schoolSubjectRouter