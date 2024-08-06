import { Request, Response } from "express";
import { IProduto } from "../../database/models/produto";
import * as yup from 'yup'
import { validation } from "../../shared/validation";
import { StatusCodes } from "http-status-codes";
import { ProdutosProvider } from "../../database/providers/produtos";

interface IParamProps {
    id?: number
}

interface IBodyProps extends Omit<IProduto, 'id'> {}

const updateIdSchema = yup.object().shape({
    id: yup.number().integer().required().moreThan(0)
});

const updateContentSchema = yup.object().shape({
    url: yup.string().required(),
    nome: yup.string().required(),
    promocao: yup.boolean().required(),
    valor: yup.number().required(),
    valorPromocional: yup.number().required(),
    descricao: yup.string().required(),
});

export const updateById = async (req: Request<IParamProps, {}, IBodyProps>, res: Response) => {
    const { params, body } = req

    if (!params.id) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            errors: {
                default: 'O parâmetro "id" precisa ser informado'
            }
        });
    }

    const validationIdErrors = await validation(updateIdSchema, params);
    const validationContentSchema = await validation(updateContentSchema, body)

    if (validationIdErrors || validationContentSchema) {
        return res.status(StatusCodes.BAD_REQUEST).json({ errors: validationIdErrors && validationContentSchema });
    }

    const result = await ProdutosProvider.updateById(body, params.id)

    if (result instanceof Error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: result.message
            }
        });
    }

    return res.status(StatusCodes.NO_CONTENT).json()
}