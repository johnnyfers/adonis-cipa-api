import Route from '@ioc:Adonis/Core/Route'

Route.group(()=>{
    Route.resource('candidates', 'CandidatesController').apiOnly()
}).middleware(['auth'])