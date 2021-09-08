import { DateTime } from 'luxon'
import { BaseModel, column, HasOne, hasOne} from '@ioc:Adonis/Lucid/Orm'

import Perfil from './Perfil'

export default class Address extends BaseModel {
 
  @column({ isPrimary: true })
  public id: number
  
  @column()
  public postcode: string

  @column()
  public street: string

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

  @hasOne(() => Perfil,{
    foreignKey:'address_id'
  })
  public perfil: HasOne<typeof Perfil>

}
