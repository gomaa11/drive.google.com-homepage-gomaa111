import { z } from 'zod'

export const passwordsValidator = z.object({
  email: z.string(),
  password:z.string()
})
