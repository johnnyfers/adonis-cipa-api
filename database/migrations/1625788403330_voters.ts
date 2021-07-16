import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Voters extends BaseSchema {
  protected tableName = 'voters'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table
        .integer('election_id')
        .unsigned()
        .references('id').inTable('elections')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

      table.string('cpf').notNullable()
      table.string('name').notNullable()
      table.string('email').notNullable()
      table.string('password').nullable()
      table.boolean('has_voted').notNullable()
    
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
