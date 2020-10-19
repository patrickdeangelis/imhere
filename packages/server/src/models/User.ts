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
} from 'typeorm'
import { SchoolSubject } from './SchoolSubject'
import { Presence } from './Presence'

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id_user: string

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  password: string

  @Column()
  isProfessor: boolean

  @OneToMany(type => SchoolSubject, schoolSubject => schoolSubject.user)
  schoolSubject: SchoolSubject

  @OneToMany(type => Presence, presence => presence.user)
  presence: Presence
  
  @ManyToMany(type => SchoolSubject, registered => registered.user)
  @JoinTable()
  registered: SchoolSubject[]

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
export default User
