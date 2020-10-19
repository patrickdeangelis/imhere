import { type } from 'os'
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  ManyToMany
} from 'typeorm'
import { Class } from './Class'

import User from './User'

@Entity()
export class SchoolSubject {
  @PrimaryGeneratedColumn('uuid')
  id_SchoolSubject: string

  @Column('text')
  schoolsubject: string

  @Column('text')
  description: string

  @Column()
  workload: number

  @ManyToOne(type => User, professor => professor.schoolSubject)
  professor: User

  @OneToMany(type => Class, classes => classes.schoolSubject)
  classes: Class

  @ManyToMany(type => User, student => student.registered) 
  student: User

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default SchoolSubject
