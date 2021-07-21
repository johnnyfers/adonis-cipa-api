import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SolicitationValidator {
  constructor (protected ctx: HttpContextContract) {
  }

  public schema = schema.create({
	name: schema.string({ trim: true }),

	email: schema.string({}, [
		rules.email()
	]),

	cpf: schema.string(),

	is_candidate: schema.boolean(),

	is_voter:schema.boolean(),
  })

  public messages = {}
}
