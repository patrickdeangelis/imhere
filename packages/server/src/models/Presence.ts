import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne
} from 'typeorm'
import SchoolSubject from './SchoolSubject'
import User from './User'
import Class from './Class'

@Entity()
export class Presence {
  @PrimaryGeneratedColumn('uuid')
  id_presence: number

  @Column('text')
  justification: string

  @Column()
  Valid: boolean

  @Column('time with time zone')
  V_start: string

  @Column('time with time zone')
  V_middle: string

  @Column('time with time zone')
  V_finish: string

  @Column()
  F_start: string

  @Column()
  F_middle: string

  @Column()
  F_finish: string

  @ManyToOne(type => User, user => user.presence)
  user: User

  @ManyToOne(type => Class, classes => classes.presence)
  classes: Class

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
export default Presence
