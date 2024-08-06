import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup'
import { validation } from '../../shared/validation';
import { ProdutosProvider } from '../../database/providers/produtos';

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

    const result = await ProdutosProvider.getAll()

    if (result instanceof Error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: result.message
            }
        });
    }

    return res.status(StatusCodes.OK).json(result)
}