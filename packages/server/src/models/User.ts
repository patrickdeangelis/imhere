import { type } from 'os'
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from 'typeorm'
import Registered from './Registered'
import { SchoolSubject } from './SchoolSubject'
import { Validations } from './Validations'

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  password: string

  @Column()
  isProfessor: boolean

  @OneToMany(type => SchoolSubject, schoolSubject => schoolSubject.user)
  schoolSubject: SchoolSubject

  @OneToMany(type => Validations, validations => validations.user)
  validations: Validations

  @OneToMany(type => Registered, registered => registered.user)
  registered: Registered

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
export default User
