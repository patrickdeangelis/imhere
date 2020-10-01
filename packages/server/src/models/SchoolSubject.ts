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
import { Classes } from './Classes'
import { Registered } from './Registered'
import User from './User'

@Entity()
export class SchoolSubject {
  @PrimaryColumn('varchar')
  id: string

  @Column()
  name: string

  @Column('text')
  description: string

  @Column()
  workloader: number

  @ManyToOne(type => User, user => user.schoolSubject)
  user: User

  @OneToMany(type => Classes, classes => classes.schoolSubject)
  classes: Classes

  @OneToMany(type => Registered, registered => registered.schoolSubject)
  registered: Registered

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default SchoolSubject
