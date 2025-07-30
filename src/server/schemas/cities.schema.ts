import z from 'zod'

export const citySchema = z.object({
  name: z.string().min(3).max(150),
  state: z.string().length(2)
})

const cityWithIdSchema = citySchema.extend({ id: z.coerce.number().int().min(1) })

export const querySchema = z.object({
  search: z.string().optional(),
  page: z.coerce.number().int().min(1).optional(),
  per_page: z.coerce.number().int().min(1).optional()
})

export const paramsSchema = z.object({
  id: z.coerce.number().int().min(1).optional()
})

export type ICity = z.infer<typeof cityWithIdSchema>

export type IQuery = z.infer<typeof querySchema>

export type IParams = z.infer<typeof paramsSchema>
