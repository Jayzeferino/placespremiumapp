import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User';

export default class UsersController {
    public async create({ request }: HttpContextContract) {
        const { name, password, email } = request.only(["name", "password", "email"]);
        
        const user = await User.create(
            {
                name,
                email,
               password,
            }
        );
        return user
      }
}
