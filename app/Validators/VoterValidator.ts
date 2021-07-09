import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class VoterValidator {
  constructor(protected ctx: HttpContextContract) {
  }

  public schema = schema.create({
    name: schema.string({ trim: true }),

    email: schema.string({}, [
      rules.email()
    ]),

    password: schema.string({ trim: true }),

    cpf: schema.string({ trim: true })


  })

  public messages = {}
}
