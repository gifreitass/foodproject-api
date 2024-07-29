import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup'
import { validation } from '../../shared/validation';

interface IParamProps {
    id?: number
}

const deleteSchema = yup.object().shape({
    id: yup.number().integer().required().moreThan(0)
});

export const deleteById = async (req: Request<IParamProps>, res: Response) => {
    const { params } = req;

    if (!params) {
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

    return res.status(StatusCodes.NO_CONTENT).send()
}