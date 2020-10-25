import User from "../../models/User"
import { getRepository } from "typeorm"
import { hash } from "bcryptjs"

interface Request {
  id: string
  name: string,
  email: string,
  isProfessor: boolean,
  password: string,
}

class AlterUserService {
  public async execute({ id, name, email, isProfessor, password }: Request): Promise<User> {
    const userRepository = getRepository(User)
    const checkUser = await userRepository.findOne({ where: { id_user: id } })

    if (!checkUser) {
      throw new Error('Error to find user in database')
    }

    checkUser.name = name
    checkUser.email = email
    checkUser.isProfessor = isProfessor
    checkUser.password = await hash(password, 12)

    await userRepository.save(checkUser)

    return checkUser
  }
}

export default AlterUserService