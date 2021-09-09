import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Address from 'App/Models/Address';
import Perfil from 'App/Models/Perfil';
import User from 'App/Models/User';
import { DateTime } from 'luxon';


export default class PerfilsController {
    
    public async store({ request }: HttpContextContract) { 

        const { password, email, name, img_url, fone, services, color, postcode, street, number, city, state, country} = request
        .only(["password", "email", "name", "img_url", "fone", "services", "color","postcode","street","number","city","state","country"]);
        const user = new User();
        user.password = password;
        user.email = email;
        await user.save();

        const perfil = new Perfil();
        perfil.name= name;
        perfil.img_url = img_url;
        perfil.fone = fone;
        perfil.services = services;
        perfil.color = color;
        perfil.user_id = user.id;
        await perfil.save()

        const address = new Address();
        address.postcode= postcode;
        address.street= street;
        address.number= number;
        address.city= city;
        address.state= state;
        address.country= country;
        address.perfil_id = perfil.id;
        await address.save();

        return perfil;
    }

    public async update({auth, request }: HttpContextContract) { 

        const {  name, img_url, fone, services, color, postcode, street, number, city, state, country} = request
        .only(["name", "img_url", "fone", "services", "color","postcode","street","number","city","state","country"]);
    
        const perfil= await Perfil.findByOrFail('user_id', auth.user?.id)
        perfil.name= name;
        perfil.img_url = img_url;
        perfil.fone = fone;
        perfil.services = services;
        perfil.color = color;
        perfil.updatedAt = DateTime.local()

        const address = await Address.findByOrFail('perfil_id',perfil.id)
        address.postcode= postcode;
        address.street= street;
        address.number= number;
        address.city= city;
        address.state= state;
        address.country= country;

        await perfil.save()
        await address.save()

        return {"SUCESSO"}
    }
    
    public async show({ request }: HttpContextContract) { 
        const perfil = await Perfil.query()
        .preload('address')

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
        return {perfils};
    }
    
    
}
