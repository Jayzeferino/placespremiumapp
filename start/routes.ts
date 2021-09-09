
import Route from '@ioc:Adonis/Core/Route'

Route.get('/dashboard', 'UsersController.index')
.middleware('auth')

Route
  .group(() => {
    Route.put('/perfil', 'UsersController.update')
}).middleware('auth').prefix('/api')


Route.group(() => {
    Route.get('/perfils','PerfilsController.show')
    Route.post("/register","PerfilsController.store");
    Route.post('/login','Authcontroller.login');
}).prefix('/api')
