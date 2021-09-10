import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Perfil from 'App/Models/Perfil'

export default class AddressesController {

  public async store ({}: HttpContextContract) {

  }

  public async show ({params}: HttpContextContract) {
    const { state } = params
    const perfil = await Perfil.query()
    .preload('address',(querystate)=>{
      querystate.where('state',state)
    }).paginate(1,5)
    
    const perfils= perfil.map((user) => user.serialize({
      fields: {
          omit: ['id','user_id','created_at' ,'updated_at']
        },
        relations: {
          address: {
            fields: {
              omit: ['id','perfil_id','created_at' ,'updated_at']
            },
          },
          }
  }))
    return {perfil}
  }

  public async edit ({}: HttpContextContract) {

  }

   public async destroy ({}: HttpContextContract) {

  }
}
