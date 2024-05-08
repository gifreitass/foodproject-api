import * as create from './create'
import * as deleteById from './deleteById'
import * as getAll from './getAll'
import * as getById from './getById'


export const RestaurantesController = {
    ...create,
    ...deleteById,
    ...getAll,
    ...getById
}