import { Request, RequestHandler, Response } from "express";
import { IRestaurante } from "../../database/models/restaurante";
import { validation } from "../../shared/validation";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup'
import { RestaurantesProvider } from "../../database/providers/restaurantes";

const createSchema = yup.object().shape({
    url: yup.string().required(),
    nome: yup.string().required(),
    categoria: yup.string().required(),
    avaliacao: yup.number().required(),
    sobre: yup.string().required(),
});

export const create: RequestHandler = async (req: Request<{}, {}, IRestaurante>, res: Response) => {
    const { body } = req;

    const validationErrors = await validation(createSchema, body);

    if (validationErrors) {
        return res.status(StatusCodes.BAD_REQUEST).json({ errors: validationErrors });
    }

    const result = await RestaurantesProvider.create(body)

    if (result instanceof Error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: result.message
            }
        });
    }

    return res.status(StatusCodes.CREATED).json(result);
}