import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany
} from 'typeorm'
import { SchoolSubject } from './SchoolSubject'
import { Validations } from './Validations'

@Entity()
export class Classes {
  @PrimaryGeneratedColumn('uuid')
  id: number

  @Column('date')
  date_class: Date

  @Column('time with time zone')
  start_class: string

  @Column('time without time zone')
  finish_class: string

  @Column()
  tolerance: number

  @ManyToOne(type => SchoolSubject, schoolSubject => schoolSubject.classes)
  schoolSubject: SchoolSubject

  @OneToMany(type => Validations, validations => validations.classes)
  validations: Validations

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
export default Classes
