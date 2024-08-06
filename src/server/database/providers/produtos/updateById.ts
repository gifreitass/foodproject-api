import { ETableNames } from "../../ETableNames";
import { Knex } from "../../knex";
import { IProduto } from "../../models/produto";

export const updateById = async (produto: Omit<IProduto, "id">, id: number) => {
    try {
        const result = await Knex(ETableNames.produto).where('id', '=', id).update(produto)

        if (result > 0) {
            return 
        }

        return new Error('Erro ao cadastrar registro')
    } catch (error) {
        return new Error('Erro ao cadastrar registro')
    }
}