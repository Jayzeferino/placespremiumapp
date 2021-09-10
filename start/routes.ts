
import Route from '@ioc:Adonis/Core/Route'

Route
  .group(() => {
    Route.resource('users','UserController').apiOnly()
    Route.resource('perfils', 'PerfilsController').except(['show']).apiOnly();
}).middleware('auth').prefix('/api')


Route.group(() => {
    Route.get('/search','PerfilsController.show');
    Route.post("/register","PerfilsController.store");
    Route.post('/login','Authcontroller.login');
    Route.get('/address/:state/','AddressesController.show')
}).prefix('/api')
