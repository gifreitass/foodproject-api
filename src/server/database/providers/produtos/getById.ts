import { ETableNames } from "../../ETableNames"
import { Knex } from "../../knex"

export const getById = async (id: number) => {
    try {
        const result = await Knex(ETableNames.produto).where('id', '=', id).select()

        if (result.length > 0) {
            return result
        }

        return new Error('Erro ao cadastrar registro')
    } catch (error) {
        return new Error('Erro ao cadastrar registro')
    }
}