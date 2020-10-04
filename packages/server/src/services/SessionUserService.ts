import { getRepository } from 'typeorm'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import User from '../models/User'
import authConfig from '../config/authConf' // Arquivo de config

interface Request {
  email: string
  password: string
}
interface Response {
  user: User
  token: string
}

class SessionUserService {
  public async execute({ email, password }: Request): Promise<Response> {
    const userRepo = getRepository(User)
    const user = await userRepo.findOne({
      where: { email }
    })
    if (!user) {
      throw new Error('Email incorret/Password incorret')
    }
    const checkPassword = await compare(password, user.password)
    if (!checkPassword) {
      throw new Error('Email incorret/Password incorret')
    }

    const token = sign({}, authConfig.jwt.secret, {
      subject: user.id,
      expiresIn: authConfig.jwt.expired
    })

    return {
      user,
      token
    }
  }
}

export default SessionUserService
