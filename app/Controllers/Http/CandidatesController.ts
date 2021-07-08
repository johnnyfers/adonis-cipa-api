import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Candidate from 'App/Models/Candidate'
import CandidateValidator from 'App/Validators/CandidateValidator'

export default class CandidatesController {
  public async index({ }: HttpContextContract) {
    const candidates = await Candidate.all()

    return candidates
  }

  // public async create({ }: HttpContextContract) { }

  public async store({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate(CandidateValidator)

      const candidate = await Candidate.create(payload)

      return candidate
    } catch (err) {
      return response.badRequest(err)
    }
  }

  public async show({ response, params }: HttpContextContract) {
    try {
      const candidate = await Candidate.findByOrFail('id', params.id)

      return candidate
    } catch (err) {
      return response.badRequest(err)
    }
  }

  // public async edit({ }: HttpContextContract) { }

  public async update({ request, response, params }: HttpContextContract) {
    try {
      const candidate = await Candidate.findByOrFail('id', params.id)

      const payload = await request.validate(CandidateValidator)

      await candidate.merge(payload).save()

      return candidate
    } catch (err) {
      return response.badRequest(err)
    }
  }

  public async destroy({ response, params }: HttpContextContract) {
    try {
      const candidate = await Candidate.findByOrFail('id', params.id)

      return await candidate.delete()
    } catch (err) {
      return response.badRequest(err)
    }
  }
}
