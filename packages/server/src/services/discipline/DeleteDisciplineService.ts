import Discipline from '../../models/Discipline'
import { getRepository } from "typeorm"

interface Request {
  id: string
}
interface Response {
  deleted: boolean
}
class DeleteDisciplineService {
  public async execute({ id }: Request): Promise<Response> {
    const disciplineRepository = getRepository(Discipline)
    const discipline = await disciplineRepository.findOne({ where: { id } })
    if (!discipline) {
      throw new Error('Error to find discipline in database')
    }

    try {
      await disciplineRepository.remove(discipline);
    } catch {
      throw new Error('Error to delete user...')
    }

    return {
      deleted: true
    }
  }
}

export default DeleteDisciplineService
