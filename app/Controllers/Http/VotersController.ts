import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Voter from 'App/Models/Voter'
import VoterValidator from 'App/Validators/VoterValidator'

export default class VotersController {
  public async index({ }: HttpContextContract) {
    const voters = await Voter.all()

    return voters
  }

  // public async create ({}: HttpContextContract) { }

  public async store({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate(VoterValidator)

      const voter = await Voter.create(payload)

      return voter
    } catch (err) {
      return response.badRequest(err)
    }
  }

  public async show({ response, params }: HttpContextContract) {
    try {
      const voter = await Voter.findByOrFail('id', params.id)

      return voter
    } catch (err) {
      return response.badRequest(err)
    }
  }

  // public async edit({ }: HttpContextContract) { }

  public async update({ request, response, params }: HttpContextContract) {
    try {
      const payload = await request.validate(VoterValidator)

      const voter = await Voter.findByOrFail('id', params.id)

      await voter.merge(payload).save()

      return voter
    } catch (err) {
      return response.badRequest(err)
    }
  }

  public async destroy({ response, params }: HttpContextContract) {
    try {
      const voter = await Voter.findByOrFail('id', params.id)

      return await voter.delete()
    } catch (err) {
      return response.badRequest(err)
    }
  }
}
