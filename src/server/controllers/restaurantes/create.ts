import { Request, RequestHandler, Response } from "express";
import { IRestaurante } from "../../database/models/restaurante";
import { validation } from "../../shared/validation";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup'

const createSchema = yup.object().shape({
    url: yup.string().required(),
    nome: yup.string().required(),
    categoria: yup.string().required(),
    avaliacao: yup.number().required(),
    sobre: yup.string().required(),
});

//pendente: provider e tratamento de erro
export const create: RequestHandler = async (req: Request<{}, {}, IRestaurante>, res: Response) => {
    const { body } = req;

    const validationErrors = await validation(createSchema, body);

    if (validationErrors) {
        return res.status(StatusCodes.BAD_REQUEST).json({ errors: validationErrors });
    }

    return res.status(StatusCodes.CREATED).json({ message: 'Restaurante criado' });
}