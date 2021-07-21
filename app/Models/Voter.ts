import { DateTime } from 'luxon'
import { BaseModel, beforeSave, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Election from './Election'

export default class Voter extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public electionId: number

  @column()
  public name: string

  @column()
  public email: string

  @column()
  public cpf: string

  @column()
  public hasVoted: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(()=> Election)
  public election : BelongsTo<typeof Election>

  @beforeSave()
  public static async initializeVoter(voter: Voter) {
    if(!voter.$dirty.hasVoted) {
      voter.hasVoted = false
    }
  }
}
