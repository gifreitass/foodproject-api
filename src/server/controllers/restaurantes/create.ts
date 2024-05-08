import { Request, RequestHandler, Response } from "express";
import { IRestaurante } from "../../database/models/restaurante";
import { validation } from "../../shared/validation";
import { StatusCodes } from "http-status-codes";

const yup = require('yup');

const createRestaurantSchema = yup.object().shape({
    url: yup.string().required(),
    nome: yup.string().required(),
    categoria: yup.string().required(),
    avaliacao: yup.number().required(),
    sobre: yup.string().required(),
});

export const create: RequestHandler = async (req: Request<{}, {}, IRestaurante>, res: Response) => {
    const { body } = req;

    const validationErrors = await validation(createRestaurantSchema, body);

    if (validationErrors) {
        return res.status(StatusCodes.BAD_REQUEST).json({ errors: validationErrors });
    }

    return res.status(StatusCodes.CREATED).json({ message: 'Restaurante criado' });
}