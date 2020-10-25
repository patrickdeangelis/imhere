import User from "../../models/User"
import Discipline from "../../models/Discipline"
import { getRepository } from "typeorm"
import randomstring from 'randomstring'

interface Request {
  id: String
  email: String
  discipline: String
  description: String
  workloader: Number
  professor: String
}

class CreateDisciplineService {

  public async execute({
    email,
    discipline,
    description,
    workloader,
    professor,
    id
  }: Request): Promise<Discipline> {

    const userRepo = getRepository(User)
    const SjRepo = getRepository(Discipline)

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

    const newDiscipline = SjRepo.create({
      id_discipline: codeSchool,
      description,
      discipline,
      workloader,
      professor: professorOwen
    })

    await SjRepo.save(newDiscipline)
    console.log(newDiscipline)
    return newDiscipline
  }
}

export default CreateDisciplineService