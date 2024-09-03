import { ETableNames } from "../../ETableNames";
import { Knex } from "../../knex";

export const getAll = async () => {
    try {
        const result = await Knex(ETableNames.restaurante).select().table(ETableNames.restaurante)
        
        if (result.length > 0) {
            return result
        }

        return new Error('Nenhum restaurante encontrado')
    } catch (error) {
        return new Error('Erro ao cadastrar registro')
    }
}