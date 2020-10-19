import { Router } from "express"
import CreateSchoolSubjectService from "../services/CreateSchoolSubjectService"

const schoolSubjectRouter = Router()

schoolSubjectRouter.post("/add", (request, response) => {
  try {
    const {email, schoolsubject, description, workload} = request.body
    const createSchoolSubject = new CreateSchoolSubjectService()
    const discipline = createSchoolSubject.execute({
      email,
      schoolsubject,
      description,
      workload
    })
    
    return response.json(discipline)
  }

  catch {
    return response.status(400).json({ error: err.message })
  }
})

export default schoolSubjectRouter