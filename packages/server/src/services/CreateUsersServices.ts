import { getRepository } from 'typeorm'
import { hash } from 'bcryptjs'
import User from '../models/User'

interface Request {
  firstName: string
  email: string
  lastName: string
  age: number
  password: string
}

class CreateUsersServices {
  public async execute({
    firstName,
    lastName,
    email,
    age,
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
      firstName,
      lastName,
      email,
      age,
      password: hashPass
    })
    await userRepo.save(user)
    return user
  }
}

export default CreateUsersServices
