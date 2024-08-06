import { ETableNames } from "../../ETableNames";
import { Knex } from "../../knex";
import { IProduto } from "../../models/produto";

export const create = async (produto: Omit<IProduto, 'id'>) => {
    try {
        const [result] = await Knex(ETableNames.produto).insert(produto).returning('id')

        if (result.id) {
            return result.id
        } 

        return new Error('Erro ao cadastrar registro')
    } catch (error) {
        return new Error('Erro ao cadastrar registro')
    }
}