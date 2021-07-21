import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Solicitation from 'App/Models/Solicitation'
import SolicitationValidator from 'App/Validators/SolicitationValidator'

export default class SolicitationsController {

  public async store({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate(SolicitationValidator)

      const solicitation = await Solicitation.create(payload)

      return solicitation
    } catch(err){
      return response.badRequest(err.message)
    }
  }
}
