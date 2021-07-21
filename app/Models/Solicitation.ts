import { DateTime } from 'luxon'
import { BaseModel, beforeSave, column } from '@ioc:Adonis/Lucid/Orm'

export default class Solicitation extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public email: string

  @column()
  public cpf: string

  @column()
  public isVoter: boolean

  @column()
  public isCandidate: boolean

  @column()
  public votingNumber: number

  @column()
  public isApproved: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async initializeSolicitation(solicitation: Solicitation) {
    if(!solicitation.$dirty.isApproved) {
      solicitation.isApproved = false
    }
  }
}
