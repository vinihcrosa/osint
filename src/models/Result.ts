import { Column, Entity, Generated, ManyToOne, PrimaryColumn } from 'typeorm'

import Scan from './Scan'
import Type from './Type'

@Entity('result')
export default class Result {
  @PrimaryColumn({type: 'uuid'})
  @Generated('uuid')
  guid: string

  @Column()
  generated: Date
 
  @Column()
  visibility: number

  @Column()
  risk: number

  @Column()
  module: string

  @Column()
  data: string

  @Column()
  falsePositive: boolean

  @ManyToOne(() => Scan, scan => scan.guid)
  scan: Scan

  @ManyToOne(() => Type, type => type.guid)
  type: Type

}
