import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Address from 'App/Models/Address';
import Perfil from 'App/Models/Perfil';
import User from 'App/Models/User';


export default class PerfilsController {
    
    public async store({ request }: HttpContextContract) { 

        const { password, email, name, img_url, fone, services, styles, postcode, street, number, city, state, country} = request
        .only(["password", "email", "name", "img_url", "fone", "services", "styles","postcode","street","number","city","state","country"]);
        const user = new User();
        user.password = password;
        user.email = email;
        await user.save();

        const perfil = new Perfil();
        perfil.name= name;
        perfil.img_url = img_url;
        perfil.fone = fone;
        perfil.services = services;
        perfil.styles = styles;
        perfil.user_id = user.id;
        perfil.address_id = user.id;
        await perfil.save()

        const address = new Address();
        address.postcode= postcode;
        address.street= street;
        address.number= number;
        address.city= city;
        address.state= state;
        address.country= country;
        await address.save();
  
        return perfil;
    }
    
    public async index({ auth }: HttpContextContract) { 

        const perfil= await Perfil.find(auth.user?.id)
        await perfil.related('address').query()
        return{perfil};
    }
    
    
}
