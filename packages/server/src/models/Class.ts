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
import { Presence } from './Presence'

@Entity()
export class Class {
  @PrimaryGeneratedColumn('uuid')
  id_class: number

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

  @OneToMany(type => Presence, presence => presence.classes)
  presence: Presence

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
export default Class
