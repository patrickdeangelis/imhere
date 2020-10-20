import SchoolSubject from '../models/SchoolSubject'
import { getRepository } from "typeorm"

interface Request {
  id: string
}
interface Response {
  deleted: boolean
}
class DeleteSchoolSubjectService{
  public async execute({ id }: Request): Promise<Response>  {
    const SjRepo = getRepository(SchoolSubject)
    const discipline = await SjRepo.findOne({ where: {  id  }})
    if(!discipline){
      throw new Error('Error to find SchoolSubject in database')
    }

    try {
      await SjRepo.remove(discipline);
    } catch {
      throw new Error('Error to delete user...')
    }

    return {
      deleted: true
    }
  }
}

export default DeleteSchoolSubjectService
