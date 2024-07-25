import { Knex } from "knex";
import { ETableNames } from "../ETableNames";

const restaurantes = [
    {
        nome: 'McDonalds',
        categoria: 'Lanches',
        avaliacao: 4,
        sobre: 'Restaurante com lanches, aperitivos e sobremesas',
        url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fdesignportugal.net%2Fporque-e-o-logotipo-da-mcdonalds-tao-bem-sucedido%2F&psig=AOvVaw3ZTPfrFbA_PBhwwrIRFrW6&ust=1722026172225000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJjdncSFw4cDFQAAAAAdAAAAABAQ'
    }
]

export const seed = async (knex: Knex) => {
    const [{ count }] = await knex(ETableNames.restaurante).count<[{ count: number }]>('* as count')

    if (!Number.isInteger(count) || Number(count) > 0) return

    const restaurantesToInsert = restaurantes.map(restaurante => ({ nome: restaurante.nome, categoria: restaurante.categoria, avaliacao: restaurante.avaliacao, sobre: restaurante.sobre, url: restaurante.url }))

    await knex(ETableNames.restaurante).insert(restaurantesToInsert)
}