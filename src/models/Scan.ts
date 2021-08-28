import { Column, Entity, Generated, PrimaryColumn } from 'typeorm'

@Entity('scan')
export default class Scan {
  @PrimaryColumn({type: 'uuid'})
  @Generated('uuid')
  guid: string

  @Column()
  name: string
 
  @Column({unique: true})
  target: string

  @Column("varchar", {array: true})
  type: string[]

  @Column("varchar", {array: true})
  tags: string[]
}
