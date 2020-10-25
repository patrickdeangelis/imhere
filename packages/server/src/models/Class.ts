import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  Timestamp
} from 'typeorm'
import Discipline from './Discipline'
import { Presence } from './Presence'

@Entity()
export class Class {
  @PrimaryGeneratedColumn('uuid')
  id_class: string
  
  @Column('date')
  date_class: Date

  @Column('time with time zone')
  start_class: Date

  @Column('time with time zone')
  finish_class: Date

  @Column()
  tolerance: number

  @ManyToOne(type => Discipline, discipline => discipline.classes, { nullable: true, onDelete: "CASCADE" })
  discipline: Discipline

  @OneToMany(type => Presence, presence => presence.classes)
  presence: Presence

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
export default Class
