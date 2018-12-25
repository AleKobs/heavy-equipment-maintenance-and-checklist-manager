'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UnidadeSchema extends Schema {
  up () {
    this.create('unidades', (table) => {
      table.increments()
      table.integer('site_id').unsigned().references('id').inTable('Sites')
      table.string('name')
      table.timestamps()
    })
  }

  down () {
    this.drop('unidades')
  }
}

module.exports = UnidadeSchema
