
import Route from '@ioc:Adonis/Core/Route'

Route.get('/dashboard', 'UsersController.index')
.middleware('auth')

Route.get('/perfil','PerfilsController.index')
.middleware('auth');

Route.post("/register","PerfilsController.store");

Route.post('/login','Authcontroller.login');