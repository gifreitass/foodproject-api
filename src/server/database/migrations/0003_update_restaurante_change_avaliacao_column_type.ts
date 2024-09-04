import { Knex } from "knex";
import { ETableNames } from "../ETableNames";

export async function up(knex: Knex) {
    return knex
        .schema
        .alterTable(ETableNames.restaurante, table => {
            table.decimal('avaliacao').alter()
        })
        .then(() => {
            console.log(`# Up update table ${ETableNames.restaurante}`)
        })
}

export async function down(knex: Knex) {
    return knex
        .schema
        .alterTable(ETableNames.restaurante, table => {
            table.integer('avaliacao').alter()
        })
        .then(() => {
            console.log(`# Up update table ${ETableNames.restaurante}`)
        })
}