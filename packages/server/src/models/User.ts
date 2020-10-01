import { type } from 'os'
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from 'typeorm'
import { SchoolSubject } from './SchoolSubject'

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

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

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
export default User
