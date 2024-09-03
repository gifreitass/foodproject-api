import { Knex } from "../../knex";
import { ETableNames } from "../../ETableNames";
import { IRestaurante } from "../../models/restaurante";

export const create = async (restaurante: Omit<IRestaurante, 'id'>): Promise<number | Error> => {
    try {
        const [result] = await Knex(ETableNames.restaurante).insert(restaurante).returning('id')

        if (result.id) {
            return result.id
        } 

        return new Error('Erro ao cadastrar registro')
    } catch (error) {
        return new Error('Erro ao cadastrar registro')
    }
}