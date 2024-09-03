import { ETableNames } from "../../ETableNames"
import { Knex } from "../../knex"

export const getAll = async () => {
    try {
        const result = await Knex(ETableNames.produto).select().table(ETableNames.produto)

        if (result.length > 0) {
            return result
        }

        return new Error('Erro ao cadastrar registro')
    } catch (error) {
        
        return new Error('Erro ao cadastrar registro')
    }
} 