import User from "../models/User"
import SchoolSubject from "../models/SchoolSubject"
import { getRepository } from "typeorm"
import { deflate } from "zlib"

interface Request {
  email: String
  schoolsubject: String
  description: String
  workload: Number
}

class CreateSchoolSubjectService {
  public async execute({email, schoolsubject, description, workload}: Request): Promise<SchoolSubject> {
    const userRepo = getRepository(User)
    const SJRepo = getRepository(SchoolSubject)
    const user = await userRepo.findOne({ where: email})
    if(!user){
      throw new Error('Professor not exist ...')
    }
    if(!user.isProfessor){
      throw new Error('User is not professor ...')
    }
    const professor = user.id_user
    const Discipline = SJRepo.create({
      schoolsubject,
      description,
      workload,
      professor
    })

    await SJRepo.save(Discipline)

    return Discipline
  }
}

export default CreateSchoolSubjectService