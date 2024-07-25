import { Knex } from 'knex'
import { ETableNames } from '../ETableNames'

export async function up(knex: Knex) {
    return knex
        .schema
        .createTable(ETableNames.produto, table => {
            table.bigIncrements('id').primary().index()
            table.string('nome', 100).index().notNullable()
            table.integer('valor').index().notNullable()
            table.boolean('promocao').index().notNullable()
            table.integer('valorPromocional').index().notNullable()
            table.string('descricao', 300).index().notNullable()
            table.string('url', 300).index().notNullable()
            table.bigInteger('restauranteId').index().notNullable().references('id').inTable(ETableNames.restaurante).onUpdate('CASCADE').onDelete('RESTRICT')
            table.comment('Tabela usada para armazenar produtos no sistema')
        })
        .then(() => {
            console.log(`# Create table ${ETableNames.produto}`)
        })
}

export async function down(knex: Knex) {
    return knex
        .schema
        .dropTable(ETableNames.produto)
        .then(() => {
            console.log(`# Dropped table ${ETableNames.produto}`)
        })
}