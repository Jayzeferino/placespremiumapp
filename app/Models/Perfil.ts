import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column} from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'
import Address from './Address'

export default class Perfil extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public user_id: number
  
  @column()
  public name: string
  
  @column()
  public img_url: string
  
  @column()
  public fone: string
  
  @column()
  public services: string
  
  @column()
  public address_id: number

  @column()
  public styles: JSON
  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime
  
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
  
  @belongsTo(() => User,{
    localKey: 'user_id'
  })
  public user: BelongsTo<typeof User>

  @belongsTo(() => Address,{
    localKey: 'address_id'
  }) 
  public address: BelongsTo<typeof Address>

}