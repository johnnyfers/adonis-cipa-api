import Route from '@ioc:Adonis/Core/Route'

Route.post('solicitations', 'CandidatesController.store').middleware(['auth'])