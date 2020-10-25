import User from "../../models/User"
import Discipline from "../../models/Discipline"
import { getRepository } from "typeorm"
import randomstring from 'randomstring'

interface Request {
  email: String
  discipline: String
  description: String
  workloader: Number
}

class CreateDisciplineService {

  public async execute({
    email,
    discipline,
    description,
    workloader,
  }: Request): Promise<Discipline> {

    const userRepository = getRepository(User)
    const disciplineRepository = getRepository(Discipline)

    const checkUserEmail = await userRepository.findOne({
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
    }) as string;

    const professorOwen = checkUserEmail.id_user

    const newDiscipline = disciplineRepository.create({
      id_discipline: codeSchool,
      description,
      discipline,
      workloader,
      professor: professorOwen
    })

    await disciplineRepository.save(newDiscipline)
    console.log(newDiscipline)
    return newDiscipline
  }
}

export default CreateDisciplineService