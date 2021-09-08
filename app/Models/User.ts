import { DateTime } from 'luxon'
import  { column, beforeSave, BaseModel,hasOne, HasOne }from '@ioc:Adonis/Lucid/Orm'
import Hash from '@ioc:Adonis/Core/Hash'
import Perfil from 'App/Models/Perfil'

export default class User extends BaseModel {

  @column({ isPrimary: true })
  public id: number

  @column()
  public email:string
  
  @column()
  public password:string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword (user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }

  @hasOne(() => Perfil,{
    foreignKey:'perfil_id'
  })
  public perfil: HasOne<typeof Perfil>

}
