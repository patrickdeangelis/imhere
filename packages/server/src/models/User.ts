import { type } from 'os'
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  OneToMany,
  JoinTable,
  Unique,
} from 'typeorm'
import { Discipline } from './Discipline'
import { Presence } from './Presence'

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id_user: string

  @Column()
  name: string

  @Column({unique: true})
  email: string

  @Column()
  password: string

  @Column()
  isProfessor: boolean

  @OneToMany(type => Discipline, discipline => discipline.professor)
  discipline: Discipline

  @OneToMany(type => Presence, presence => presence.user)
  presence: Presence
  
  @ManyToMany(type => Discipline, registered => registered.student)
  @JoinTable()
  registered: Discipline

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
export default User
