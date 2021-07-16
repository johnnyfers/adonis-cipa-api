import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Elections extends BaseSchema {
  protected tableName = 'elections'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()

      table.string('title').notNullable()
      table.string('description').notNullable()
      table.string('election_winner').nullable()
      table.boolean('has_begun').notNullable()
      
      table.string('start_date').notNullable()
      table.string('over_date').notNullable()
      
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
