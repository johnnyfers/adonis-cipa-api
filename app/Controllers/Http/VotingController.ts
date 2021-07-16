import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Candidate from "App/Models/Candidate"
import Voter from "App/Models/Voter"

export default class VotersController {
    public async store({ request, response, auth }: HttpContextContract) {
        try {
            const voter = await Voter.findByOrFail('id', auth.user?.id)
            const candidateNumber = request.input('number')

            const candidate = await Candidate.findByOrFail('voting_number', candidateNumber)

            if (voter.hasVoted) {
                throw new Error('You already have voted')
            }

            await Candidate.query()
                .where('voting_number', candidateNumber)
                .update('total_votes', candidate.totalVotes + 1)

            return candidate
        } catch (err) {
            return response.badRequest(err.message)
        }
    }

}
