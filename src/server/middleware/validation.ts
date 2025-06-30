import { StatusCodes } from 'http-status-codes'
import { TProperty, TErrors, TValidation } from '../shared/types/validation'
import { formatZodErrors } from '../shared/utils/formatZodErrors'

export const validation: TValidation =
  (getAllSchemas) =>
  async (req, res, next): Promise<any> => {
    const schemas = getAllSchemas((schema) => schema)

    const { errors } = Object.entries(schemas).reduce(
      (acc, [key, schema]) => {
        const prop = key as TProperty
        const { success, error } = schema.safeParse(req[prop])

        if (!success) {
          acc.errors[prop] = formatZodErrors(error.issues)
        }

        return acc
      },
      { errors: {} as TErrors }
    )

    if (!!Object.keys(errors).length) {
      return res.status(StatusCodes.BAD_REQUEST).json({ errors })
    }

    return next()
  }
