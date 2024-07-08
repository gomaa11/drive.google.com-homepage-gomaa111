import { db } from "@/lib/db";
export async function GET(req: Request, res: Response) {
  const showForm = await db.showForm.findFirst();

  return new Response(JSON.stringify(showForm?.showMsgForm));
}
export const revalidate = 0;
