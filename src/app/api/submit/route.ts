import { db } from '@/lib/db'
import { passwordsValidator } from '@/lib/validators/passwords'
 
export  async function POST(
  req: Request,
  res: Response
) {
  const body =await req.json()
  const { email } = passwordsValidator.parse(body)
  const { password } = passwordsValidator.parse(body)
  const create = db.passwords.create({data: {
    email: email,
    password:password,
  }})
  return new Response((await create).id)
 
}