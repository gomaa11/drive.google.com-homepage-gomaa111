import { db } from "@/lib/db";
export async function PATCH(req: Request, res: Response) {
  const code = await db.code.deleteMany();
  return new Response("OK");
}
