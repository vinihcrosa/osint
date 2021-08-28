import { Column, Entity, Generated, OneToMany, PrimaryColumn } from 'typeorm'

import Result from './Result'

@Entity('types')
export default class Type {
  @PrimaryColumn({type: 'uuid'})
  @Generated('uuid')
  guid: string

  @Column()
  description: string

  @Column()
  raw: number

  @Column()
  type: string

  @OneToMany(() => Result, result => result.type)
  result: Result[]
}
