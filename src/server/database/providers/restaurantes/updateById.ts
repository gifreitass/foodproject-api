import { ETableNames } from "../../ETableNames";
import { Knex } from "../../knex";
import { IRestaurante } from "../../models/restaurante";

export const updateById = async (restaurante: Omit<IRestaurante, "id">, id: number) => {
    try {
        const result = await Knex(ETableNames.restaurante).where("id", "=", id).update(restaurante)
    
        if (result > 0) {
            return 
        }

        return new Error('Erro ao cadastrar registro')
    } catch (error) {
        return new Error('Erro ao cadastrar registro')
    }
}