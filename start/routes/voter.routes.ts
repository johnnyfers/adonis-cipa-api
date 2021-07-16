import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.resource('voters', 'VotersController').apiOnly()
    Route.post('voting', 'VotingController.store')
}).middleware(['auth'])
