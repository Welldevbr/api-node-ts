import z from 'zod/v4'

export const cityDocsSchema = z.object({
  name: z.string().min(3).max(150).meta({ example: 'Cidade' }),
  state: z.string().length(2).meta({ example: 'CE' })
})
