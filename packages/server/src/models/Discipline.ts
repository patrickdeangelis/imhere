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
import { isNullOrUndefined } from 'util'
import { Class } from './Class'

import User from './User'

@Entity()
export class Discipline {

  @PrimaryColumn('varchar')
  id_discipline: string

  @Column('text')
  discipline: string

  @Column('text')
  description: string

  @Column()
  workloader: number

  @ManyToOne(type => User, professor => professor.discipline, {  onDelete: "CASCADE" })
  professor: User

  @OneToMany(type => Class, classes => classes.discipline, { nullable: true })
  classes: Class

  @ManyToMany(type => User, student => student.registered, { nullable: true, onDelete: "SET NULL" })
  student: User

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default Discipline
