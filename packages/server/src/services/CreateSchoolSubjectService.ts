import User from "../models/User"
import SchoolSubject from "../models/SchoolSubject"
import { getRepository } from "typeorm"
import randomstring from 'randomstring'

interface Request {
  id: String
  email: String
  schoolsubject: String
  description: String
  workloader: Number
  professor: String
}

class CreateSchoolSubjectService {

  public async execute({
    email,
    schoolsubject,
    description,
    workloader,
    professor,
    id }: Request): Promise<SchoolSubject> {

    const userRepo = getRepository(User)
    const SjRepo = getRepository(SchoolSubject)

    const checkUserEmail = await userRepo.findOne({
      where: { email }
    })

    if (!checkUserEmail) {
      throw new Error('Professor not exist ...')
    }
    if (!checkUserEmail.isProfessor) {
      throw new Error('User is not professor ...')
    }

    const codeSchool = randomstring.generate({
      length: 6,
      charset: 'alphabetic'
    });
    const professorOwen = checkUserEmail.id_user

    const discipline = SjRepo.create({
      id: codeSchool,
      description,
      schoolsubject,
      workloader,
      professor: professorOwen
    })

    await SjRepo.save(discipline)

    return discipline
  }
}

export default CreateSchoolSubjectService