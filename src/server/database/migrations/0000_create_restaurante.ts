//função up e down para criar e excluir a tabela do banco
import { Knex } from 'knex'
import { ETableNames } from '../ETableNames'
//knex.schema.createtable

export async function up(knex: Knex) {
    return knex
        .schema
        .createTable(ETableNames.restaurante, table => {
            table.bigIncrements('id').primary().index()
            table.string('nome', 100).index().notNullable()
            table.string('categoria', 100).index().notNullable()
            table.integer('avaliacao').index().notNullable()
            table.string('sobre', 300).index().notNullable()
        })
        .then(() => {
            console.log(`# Create table ${ETableNames.restaurante}`)
        })
}

export async function down(knex: Knex) {
    return knex
        .schema
        .dropTable(ETableNames.restaurante)
        .then(() => {
            console.log(`# Dropped table ${ETableNames.restaurante}`)
        })
}

