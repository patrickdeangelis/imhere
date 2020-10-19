import { Router } from "express"
import CreateSchoolSubjectService from "../services/CreateSchoolSubjectService"

const schoolSubjectRouter = Router()

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