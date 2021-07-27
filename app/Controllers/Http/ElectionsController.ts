import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Election from 'App/Models/Election'
import ElectionValidator from 'App/Validators/ElectionValidator'

export default class ElectionsController {
  public async index({ }: HttpContextContract) {
    const elections = await Election.all()

    return elections
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate(ElectionValidator)

      const election = await Election.create(payload)

      return election
    } catch (err) {
      return response.badRequest(err)
    }
  }

  public async update({ request, response, params }: HttpContextContract) {
    try {
      const election = await Election.findByOrFail('id', params.id)

      const payload = await request.validate(ElectionValidator)

      await election.merge(payload).save()

      return election
    } catch (err) {
      return response.badRequest(err)
    }
  }

  public async destroy({ response, params }: HttpContextContract) {
    try {
      const election = await Election.findByOrFail('id', params.id)

      return await election.delete()
    } catch (err) {
      return response.badRequest(err)
    }
  }
}

