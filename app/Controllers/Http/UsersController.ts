import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Encryption from '@ioc:Adonis/Core/Encryption'
import User from 'App/Models/User';

export default class UsersController {
    public async create({ request }: HttpContextContract) { 
        const { name, password, email } = request.only(["name", "password", "email"]);

        const pw = Encryption.encrypt(password)
        const user = await User.create(
            {
                name,
                email,
               password,
            }
        );
        console.log("hash",pw);
        return user;
        
      }
}
