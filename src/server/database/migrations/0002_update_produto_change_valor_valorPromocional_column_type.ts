import { Knex } from 'knex'
import { ETableNames } from '../ETableNames'

export async function up(knex: Knex) {
    return knex
        .schema
        .alterTable(ETableNames.produto, table => {
            table.decimal('valor').alter()
            table.decimal('valorPromocional').alter()
        })
        .then(() => {
            console.log(`# Up update table ${ETableNames.produto}`)
        })
}

export async function down(knex: Knex) {
    return knex 
        .schema
        .alterTable(ETableNames.produto, table => {
            table.integer('valor').alter()
            table.integer('valorPromocional').alter()
        })
        .then(() => {
            console.log(`# Down update table ${ETableNames.produto}`)
        })
}