import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column} from '@ioc:Adonis/Lucid/Orm'

import Perfil from './Perfil'

export default class Address extends BaseModel {
 
  @column({ isPrimary: true })
  public id: number
  
  @column()
  public postcode: string

  @column()
  public street: string

  @column()
  public perfil_id: number

  @column()
  public number: string
  
  @column()
  public city: string

  @column()
  public state: string

  @column()
  public country: string
  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Perfil,{
    localKey: 'perfil_id',
  })
  public perfil: BelongsTo<typeof Perfil>

}
