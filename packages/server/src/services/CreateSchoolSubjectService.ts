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
<<<<<<< HEAD
  public async execute({
    email,
    schoolsubject,
    description,
    workloader,
    professor,
    id }: Request): Promise<SchoolSubject> {

=======
  public async execute({email, schoolsubject, description, workload}: Request): Promise<SchoolSubject> {
>>>>>>> 0b7ce62ba7865f9c57ac2ce4eb43d462eef24ca0
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
<<<<<<< HEAD

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
=======
    const professor = user.id_user
    const Discipline = SJRepo.create({
      schoolsubject,
      description,
      workload,
      professor
>>>>>>> 0b7ce62ba7865f9c57ac2ce4eb43d462eef24ca0
    })

    await SjRepo.save(discipline)

    return discipline
  }
}

export default CreateSchoolSubjectService