import { Request, RequestHandler, Response } from 'express';
import * as yup from 'yup'
import { IProduto } from '../../database/models/produto';
import { validation } from '../../shared/validation';
import { StatusCodes } from "http-status-codes";
import { ProdutosProvider } from '../../database/providers/produtos';

const createSchema = yup.object().shape({
    url: yup.string().required(),
    nome: yup.string().required(),
    promocao: yup.boolean().required(),
    valor: yup.number().required(),
    valorPromocional: yup.number().required(),
    descricao: yup.string().required(),
    restauranteId: yup.number().required().min(1)
});

export const create: RequestHandler = async (req: Request<{}, {}, IProduto>, res: Response) => {
    const { body } = req

    const validationErrors = await validation(createSchema, body)

    if (validationErrors) {
        return res.status(StatusCodes.BAD_REQUEST).json({ errors: validationErrors })
    }

    const result = await ProdutosProvider.create(body)

    if (result instanceof Error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: result.message
            }
        });
    }

    return res.status(StatusCodes.CREATED).json({ message: "Produto criado" })
}