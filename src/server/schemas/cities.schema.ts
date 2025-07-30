import z from 'zod/v4'

export const citySchema = z.object({
  name: z.string().min(3).max(150).meta({ example: 'Cidade' }),
  state: z.string().length(2).meta({ example: 'CE' })
})

const cityWithIdSchema = citySchema.extend({ id: z.coerce.number().int().min(1) })

export const querySchema = z.object({
  search: z.string().optional().meta({ example: '' }),
  page: z.coerce.number().int().min(1).optional().meta({ example: 1 }),
  per_page: z.coerce.number().int().min(1).optional().meta({ example: 10 })
})

export const paramsSchema = z.object({
  id: z.coerce.number().int().min(1).optional()
})

export type ICity = z.infer<typeof cityWithIdSchema>

export type IQuery = z.infer<typeof querySchema>

export type IParams = z.infer<typeof paramsSchema>
