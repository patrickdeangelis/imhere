import { getRepository } from "typeorm"
import Discipline from "../../models/Discipline"
 
interface Request {
  id: string
  discipline: string 
  description:string
  workloader: number
}

class AlterDisciplineService {
  public async execute({id, discipline, description, workloader}: Request): Promise<Discipline> {
    const SjRepo = getRepository(Discipline)
    const checkSj = await SjRepo.findOne({ where: { id_discipline: id } })
    if(!checkSj){
      throw new Error('Error to find discipline in database')
    }
    checkSj.discipline = discipline
    checkSj.description = description
    checkSj.workloader = workloader

    await SjRepo.save(checkSj)

    return checkSj
  }
}

export default AlterDisciplineService