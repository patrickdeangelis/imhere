import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
  ManyToOne
} from 'typeorm'
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

  @ManyToOne(type => User, User => user => user.schoolSubject)
  user: User

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
