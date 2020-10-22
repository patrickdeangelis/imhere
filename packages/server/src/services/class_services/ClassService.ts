import { getRepository, Timestamp } from 'typeorm';
import { UniqueMetadata } from 'typeorm/metadata/UniqueMetadata';
import { Class } from '../../models/Class'


interface Request {
  discipline: string
  date_class: Date
  start_class: Date
  finish_class: Date
  tolerance: number
}

class CreateClassService {
  public async execute({
    discipline,
    date_class,
    start_class,
    finish_class,
    tolerance}: Request): Promise<Class> {
      const classRepo = getRepository(Class)
      
      const newClass = classRepo.create({
        date_class,
        start_class,
        finish_class,
        tolerance,
        discipline
      })

      classRepo.save(newClass)

      return newClass
  }
}