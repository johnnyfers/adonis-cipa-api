import Route from '@ioc:Adonis/Core/Route'

Route.group(()=>{
    Route.resource('elections', 'ElectionsController').apiOnly()
}).middleware(['auth'])