import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ElectionValidator {
	constructor(protected ctx: HttpContextContract) { }

	public schema = schema.create({
		title: schema.string({ trim: true }),

		description: schema.string({ trim: true }),

		start_date: schema.string(),

		over_date: schema.string({ trim: true }),
	})

	public messages = {}
}
