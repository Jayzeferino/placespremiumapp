
import Route from '@ioc:Adonis/Core/Route'

Route.get('/menu', async ({ auth }) => {
    await auth.use('api').authenticate()
    return auth.use('api').user!
  })

Route.post("/users","UsersController.create");

Route.post('/login','Authcontroller.login');