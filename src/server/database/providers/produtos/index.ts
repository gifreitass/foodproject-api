import * as create from "./create";
import * as deleteById from "./deleteById"
import * as getById from "./getById";
import * as updateById from "./updateById";
import * as getAll from "./getAll";

export const ProdutosProvider = {
    ...create,
    ...deleteById,
    ...getAll,
    ...getById,
    ...updateById
}