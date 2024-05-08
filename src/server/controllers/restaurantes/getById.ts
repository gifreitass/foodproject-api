import { Request, Response } from "express";
import { validation } from "../../shared/validation";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup'

interface IParamProps {
    id?: number
}

const getByIdSchema = yup.object().shape({
    id: yup.number().integer().required().moreThan(0)
});

export const getById = async (req: Request<IParamProps>, res: Response) => {
    const { params } = req;

    const validationErrors = await validation(getByIdSchema, params);

    if (validationErrors) {
        return res.status(StatusCodes.BAD_REQUEST).json({ errors: validationErrors });
    }

    return res.status(StatusCodes.OK).json()
}