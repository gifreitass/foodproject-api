import * as create from './create'
import * as deleteById from './deleteById'
import * as getById from './getById'
import * as getAll from './getAll'
import * as updateById from './updateById'

export const ProdutosController = {
    ...create,
    ...deleteById,
    ...getAll,
    ...getById,
    ...updateById
}