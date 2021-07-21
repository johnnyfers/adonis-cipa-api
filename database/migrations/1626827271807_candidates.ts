import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Candidates extends BaseSchema {
  protected tableName = 'candidates'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()

      table.integer('election_id')
        .unsigned()
        .references('elections.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

      table.string('cpf').notNullable()
      table.string('name').notNullable()
      table.string('email').notNullable()
      
      table.integer('voting_number').notNullable()
      table.integer('total_votes').notNullable()

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
