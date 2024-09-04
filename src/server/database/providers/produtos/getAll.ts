import { ETableNames } from "../../ETableNames"
import { Knex } from "../../knex"

export const getAll = async () => {
    try {
        const result = await Knex(ETableNames.produto).select().table(ETableNames.produto)

        console.log(result)
        if (result.length > 0) {
            return result
        }

        return new Error('Nenhum produto localizado')
    } catch (error) {
        console.log(error)
        return new Error('Erro ao buscar produtos')
    }
} 