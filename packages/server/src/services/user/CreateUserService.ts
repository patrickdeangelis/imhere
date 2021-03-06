import { getRepository } from 'typeorm'
import { hash } from 'bcryptjs'
import User from '../../models/User'

interface Request {
  name: string
  email: string
  isProfessor: boolean
  password: string
}

class CreateUserService {
  public async execute({
    name,
    email,
    isProfessor,
    password
  }: Request): Promise<User> {
    const userRepository = getRepository(User)
    const checkUser = await userRepository.findOne({
      where: { email }
    })

    if (checkUser) {
      throw new Error('Email already exists...')
    }

    const hashPass = await hash(password, 12)
    const user = userRepository.create({
      name,
      email,
      isProfessor,
      password: hashPass
    })

    await userRepository.save(user)

    return user
  }
}

export default CreateUserService
