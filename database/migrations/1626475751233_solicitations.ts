import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Solicitations extends BaseSchema {
  protected tableName = 'solicitations'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      
      table.string('cpf').notNullable()
      table.string('name').notNullable()
      table.string('email').notNullable()

      table.boolean('is_voter').notNullable()
      table.boolean('is_candidate').notNullable()

      table.boolean('is_approved').notNullable()
      
      table.integer('voting_number').nullable()
      
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
