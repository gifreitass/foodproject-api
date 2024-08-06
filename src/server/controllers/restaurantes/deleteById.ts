import { Request, Response } from "express";
import { validation } from "../../shared/validation";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup'
import { RestaurantesProvider } from "../../database/providers/restaurantes";

interface IParamProps {
    id: number
}

const deleteSchema = yup.object().shape({
    id: yup.number().integer().required().moreThan(0)
});

export const deleteById = async (req: Request<IParamProps>, res: Response) => {
    const { params } = req;

    if (!params.id) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            errors: {
                default: 'O parâmetro "id" precisa ser informado'
            }
        });
    }

    const validationErrors = await validation(deleteSchema, params);

    if (validationErrors) {
        return res.status(StatusCodes.BAD_REQUEST).json({ errors: validationErrors });
    }

    const result = await RestaurantesProvider.deleteById(params.id)

    if (result instanceof Error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: result.message
            }
        });
    }

    return res.status(StatusCodes.NO_CONTENT).send()
}