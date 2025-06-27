import z from 'zod'

export const citySchema = z.object({
  name: z.string().min(3),
  state: z.string().length(2)
})

export const querySchema = z.object({
  search: z.string().optional(),
  page: z.coerce.number().int().min(1).optional(),
  per_page: z.coerce.number().int().min(1).optional()
})

export const paramsSchema = z.object({
  id: z.coerce.number().int().min(1).optional()
})

export type ICity = z.infer<typeof citySchema>

export type IQuery = z.infer<typeof querySchema>

export type IParams = z.infer<typeof paramsSchema>
