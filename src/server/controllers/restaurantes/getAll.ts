import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup'
import { validation } from '../../shared/validation';

interface IQueryProps {
    id?: number,
    page?: number,
    limit?: number,
    filter?: string;
}

const getAllSchema = yup.object().shape({
    page: yup.number().optional().moreThan(0),
    limit: yup.number().optional().moreThan(0),
    id: yup.number().integer().optional().default(0),
    filter: yup.string().optional()
});

export const getAll = async (req: Request<{}, {}, {}, IQueryProps>, res: Response) => {
    const { query } = req;

    const validationErrors = await validation(getAllSchema, query);

    if (validationErrors) {
        return res.status(StatusCodes.BAD_REQUEST).json({ errors: validationErrors });
    }

    // res.setHeader('acess-control-expose-headers', 'x-total-count')
    // res.setHeader('x-total-count', count)

    return res.status(StatusCodes.OK).json()
}