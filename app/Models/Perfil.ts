import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column} from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'
import Andress from 'App/Models/Andress'


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
  public andress_id: number

  @column()
  public services: string
  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime
  
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
  
  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @belongsTo(() => )
  public user: BelongsTo<typeof User>

}