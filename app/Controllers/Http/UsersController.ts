import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Encryption from '@ioc:Adonis/Core/Encryption'
import User from 'App/Models/User';

export default class UsersController {

    public async create({ request }: HttpContextContract) { 
        const { password, email } = request.only(["password", "email"]);
        const user = new User();   
        user.password = password;
        user.email = email;
        await user.save();

        return user;
      }

      public async update(){

      }
}
