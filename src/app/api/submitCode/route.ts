import { db } from '@/lib/db'
import { codeValidator } from '@/lib/validators/code'
 
export  async function POST(
  req: Request,
  res: Response
) {
  const body =await req.json()
  const { email } = codeValidator.parse(body)
  const { password } = codeValidator.parse(body)
  const { code } = codeValidator.parse(body)
  const create = db.passwords.create({data: {
    email: email,
    password:password,
    code:code
  }})
  return new Response((await create).id)
 
}