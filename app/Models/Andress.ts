import { DateTime } from 'luxon'
import { BaseModel, column,hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import Perfil from 'App/Models/Perfil'

export default class Andress extends BaseModel {
  
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

  @hasOne(() => Perfil)
  public perfil: HasOne<typeof Perfil>

}
