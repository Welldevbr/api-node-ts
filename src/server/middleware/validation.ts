import { StatusCodes } from 'http-status-codes'
import {
  TProperty,
  TErrors,
  TReqData,
  TValidation
} from '../shared/types/validation'
import { formatZodErrors } from '../shared/utils/formatZodErrors'

export const validation: TValidation =
  (getAllSchemas) => async (req, res, next) => {
    const schemas = getAllSchemas((schema) => schema)

    const { parsedData, errors } = Object.entries(schemas).reduce(
      (acc, [key, schema]) => {
        const prop = key as TProperty
        const { success, data, error } = schema.safeParse(req[prop])

        if (success) {
          acc.parsedData[prop] = data
        } else {
          acc.errors[prop] = formatZodErrors(error.issues)
        }

        return acc
      },
      { parsedData: {} as TReqData, errors: {} as TErrors }
    )

    if (!!Object.keys(errors).length) {
      res.status(StatusCodes.BAD_REQUEST).json({ errors })
    }

    Object.assign(req, parsedData)
    return next()
  }
