import {
  BaseModel,
  beforeSave,
  column,
  HasMany,
  hasMany
} from '@ioc:Adonis/Lucid/Orm'

import { DateTime } from 'luxon'
import Candidate from './Candidate'
import Voter from './Voter'

export default class Election extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public description: string

  @column()
  public electionWinner: string

  @column()
  public hasBegun: boolean

  @column()
  public startDate: string

  @column()
  public overDate: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Candidate)
  public candidates: HasMany<typeof Candidate>

  @hasMany(() => Voter)
  public voters: HasMany<typeof Voter>

  @beforeSave()
  public static async electionConfirmation(election: Election) {
    if (!election.$dirty.hasBegun) {
      election.hasBegun = false
    }
  }
}
