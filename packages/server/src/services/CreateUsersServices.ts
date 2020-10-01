import { getRepository } from 'typeorm'
import { hash } from 'bcryptjs'
import User from '../models/User'

interface Request {
  firstName: string
  lastName: string
  age: number
  password: string
}

class CreateUsersServices {
  public async execute({
    firstName,
    lastName,
    age,
    password
  }: Request): Promise<User> {
    const userRepo = getRepository(User)
    const checkUser = await userRepo.findOne({
      where: { firstName, lastName }
    })
    if (checkUser) {
      throw new Error('User already exists...')
    }
    const hashPass = await hash(password, 12)
    const user = userRepo.create({
      firstName,
      lastName,
      age,
      password: hashPass
    })
    await userRepo.save(user)
    return user
  }
}

export default CreateUsersServices
