import { db } from "@/lib/db";
export async function GET(req: Request, res: Response) {
  const code = await db.code.findMany();
  if (code.length == 0) {
    return new Response("Could not fetch posts", { status: 500 });
  }
  return new Response(JSON.stringify(code));
}
