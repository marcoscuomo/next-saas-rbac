import { z } from 'zod'
import { roleSchema } from '../roles'

export const projectSchema = z.object({
  __typeName: z.literal('Project').default('Project'),
  id: z.string(),
  ownerId: z.string(),
})

export type Project = z.infer<typeof projectSchema>
