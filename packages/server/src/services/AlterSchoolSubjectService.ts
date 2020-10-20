import { getRepository } from "typeorm"
import { hash } from "bcryptjs"
import SchoolSubject from "../models/SchoolSubject"
 
interface Request {
  id: string
  schoolsubject: string 
  workloader: number,
}

class AlterSchoolSubjectService {
  public async execute({id, schoolsubject, workloader}: Request): Promise<SchoolSubject> {
    const SjRepo = getRepository(SchoolSubject)
    const checkSj = await SjRepo.findOne({ where: { schoolsubject: id } })
    if(!checkSj){
      throw new Error('Error to find user in database')
    }
    checkSj.schoolsubject = schoolsubject
    checkSj.workloader = workloader

    await SjRepo.save(checkSj)

    return checkSj
  }
}

export default AlterSchoolSubjectService