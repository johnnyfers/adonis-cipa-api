import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Admin from 'App/Models/Admin'
import AdminValidator from 'App/Validators/AdminValidator'

export default class AdminsController {
  public async index({ }: HttpContextContract) {
    const admins = await Admin.all()

    return admins
  }

  //public async create ({}: HttpContextContract) { }

  public async store({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate(AdminValidator)

      const admin = await Admin.create(payload)

      return admin
    } catch (err) {
      return response.badRequest(err)
    }
  }

  public async show({ response, params }: HttpContextContract) {
    try {
      const admin = await Admin.findByOrFail('id', params.id)

      return admin
    } catch (err) {
      return response.badRequest(err)
    }
  }

  //public async edit ({}: HttpContextContract) { }

  public async update({ request, response, params }: HttpContextContract) {
    try {
      const admin = await Admin.findByOrFail('id', params.id)

      const payload = await request.validate(AdminValidator)

      await admin.merge(payload).save()

      return admin
    } catch (err) {
      return response.badRequest(err)
    }
  }

  public async destroy({ response, params }: HttpContextContract) {
    try {
      const admin = await Admin.findByOrFail('id', params.id)

      return await admin.delete()

    } catch (err) {
      return response.badRequest(err)
    }
  }
}
