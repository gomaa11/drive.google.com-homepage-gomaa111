import { z } from 'zod'

export const codeValidator = z.object({
  email: z.string(),
  password:z.string(),
  code:z.string()
})
