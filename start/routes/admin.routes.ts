import Route from '@ioc:Adonis/Core/Route'

Route.group(()=> {
    Route.resource('admin', 'AdminsController').apiOnly()
})