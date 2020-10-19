import { type } from 'os'
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
  ManyToOne,
  OneToMany,
  ManyToMany
} from 'typeorm'
import { Class } from './Class'

import User from './User'

@Entity()
export class SchoolSubject {
  @PrimaryColumn('varchar')
  id_SchoolSubject: string

  @Column()
  name: string

  @Column('text')
  description: string

  @Column()
  workloader: number

  @ManyToOne(type => User, user => user.schoolSubject)
  user: User

  @OneToMany(type => Class, classes => classes.schoolSubject)
  classes: Class

  @ManyToMany(type => User, student => student.schoolsubject) 
  student: User[]

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default SchoolSubject
