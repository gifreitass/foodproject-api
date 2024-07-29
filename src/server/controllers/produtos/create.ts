import { Request, RequestHandler, Response } from 'express';
import * as yup from 'yup'
import { IProduto } from '../../database/models/produto';
import { validation } from '../../shared/validation';
import { StatusCodes } from "http-status-codes";

const createSchema = yup.object().shape({
    url: yup.string().required(),
    nome: yup.string().required(),
    promocao: yup.boolean().required(),
    valor: yup.number().required(),
    valorPromocional: yup.number().required(),
    descricao: yup.string().required(),
});

export const create: RequestHandler = async (req: Request<{}, {}, IProduto>, res: Response) => {
    const { body } = req

    const validationErrors = await validation(createSchema, body)

    if (validationErrors) {
        return res.status(StatusCodes.BAD_REQUEST).json({ errors: validationErrors })
    }

    return res.status(StatusCodes.CREATED).json({ message: "Produto criado" })
}