import { getRepository } from 'typeorm'
import { hash } from 'bcryptjs'
import User from '../models/User'

interface Request {
  nameUser: string
  email: string
  isProfessor: boolean
  password: string
}

class CreateUsersServices {
  public async execute({
    nameUser,
    email,
    isProfessor,
    password
  }: Request): Promise<User> {
    const userRepo = getRepository(User)
    const checkUser = await userRepo.findOne({
      where: { email }
    })
    if (checkUser) {
      throw new Error('Email already exists...')
    }
    const hashPass = await hash(password, 12)
    const user = userRepo.create({
      nameUser,
      email,
      isProfessor,
      password: hashPass
    })
    await userRepo.save(user)
    return user
  }
}

export default CreateUsersServices
