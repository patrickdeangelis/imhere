import { PrimaryGeneratedColumn, Entity, JoinTable, ManyToOne } from 'typeorm'
import SchoolSubject from './SchoolSubject'
import User from './User'

@Entity()
export class Registered {
  @PrimaryGeneratedColumn('uuid')
  id: number

  @ManyToOne(type => User, user => user.registered)
  user: User

  @ManyToOne(type => SchoolSubject, schoolSubject => schoolSubject.registered)
  schoolSubject: SchoolSubject
}
export default Registered
