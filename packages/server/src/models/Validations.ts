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
import Classes from './Classes'

@Entity()
export class Validations {
  @PrimaryGeneratedColumn('uuid')
  id: number

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

  @ManyToOne(type => User, user => user.validations)
  user: User

  @ManyToOne(type => Classes, classes => classes.validations)
  classes: Classes

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
export default Validations
