import User from "../models/User"
import { getRepository } from "typeorm"
import { compare } from "bcryptjs"

interface Request {
  id: string
  password: string
}
interface Response {
  deleted: boolean
}

class DeleteUserService {
  public async execute({ id, password }: Request): Promise<Response> {
    const userRepo = getRepository(User)
    const checkUser = await userRepo.findOne({ where: { id_user: id } })
    if(!checkUser){
      throw new Error('Error to find user in database')
    }
    const checkPassword = await compare(password, checkUser.password)
    if (!checkPassword) {
      throw new Error('Error: password incorret')
    }

    try {
      await userRepo.remove(checkUser)
    } catch {
      throw new Error('Error to delete user...')
    }

    return {
      deleted: true
    }
  }
}

export default DeleteUserService