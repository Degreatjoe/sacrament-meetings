import { getMeetings } from "@/lib/meetings-db";
import type { SacramentMeeting } from "@/lib/types";

export async function GET(request: Request): Promise<Response> {
  const { searchParams } = new URL(request.url);
  const meetings: SacramentMeeting[] = getMeetings(searchParams.get("date"));
  return Response.json(meetings);
}
