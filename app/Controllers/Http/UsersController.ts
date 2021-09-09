import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User';

export default class UsersController {
    
    public async index({auth}: HttpContextContract){

        const user = await User.find(auth.user?.id)
        await user?.preload('perfil', (postsQuery) => {
            postsQuery.preload('address')
        })
        const perfil = user.serialize({
            fields: {
              omit: ['id','password','created_at' ,'updated_at']
            },
            relations: {
                perfil: {
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
                }
            }
          })

        return{perfil};
    }

    public async store({ request }: HttpContextContract) { 
        const { password, email } = request.only(["password", "email"]);
        const user = new User();   
        user.password = password;
        user.email = email;
        await user.save();
        return user;
    }

    public async update({auth,request}:HttpContextContract){

        const user = await User.findOrFail(auth.user?.id)
        user.email = request.input("email")
        await user.save()

    }

    public async destroy({auth}){

        try {
            const user = await User.findOrFail(auth.user.id)
            await user.delete()
             return "Delete success"
        } catch (error) {
            return "Delete error"
        }
    }
}
