import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import SessionValidator from 'App/Validators/SessionValidator'

export default class SessionsController {
    async loginAdmin({ request, response, auth }: HttpContextContract) {
        try {
            const { email, password } = await request.validate(SessionValidator)

            const token = await auth.use('api').attempt(email, password, {
                expiresIn: '2days'
            })

            return token
        } catch (err) {
            return response.badRequest(err)
        }
    }
}
