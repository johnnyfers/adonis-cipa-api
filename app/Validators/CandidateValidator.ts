import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CandidateValidator {
	constructor(protected ctx: HttpContextContract) {
	}

	public schema = schema.create({
		name: schema.string({ trim: true }),

		email: schema.string({}, [
			rules.email()
		]),

		cpf: schema.string(),

		voting_number: schema.number(),
	})

	public messages = {}
}
